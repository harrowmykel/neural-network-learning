'use strict';

async function runWithValidationData(trainingsDataCount) {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    // shuffle
    // shuffleArray(data);

    // More code will be added below
    // Create the model
    const model = createModel(DATA_KEYS.length);
    tfvis.show.modelSummary({ name: "Model Summary" }, model);
    // Convert the data to a form we can use for training.

    const tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;

    const trainingInputs = [];
    const trainingLabels = [];
    const validationInputs = [];
    const validationLabels = [];
    const inputsData = inputs.arraySync();
    const labelsData = labels.arraySync();
    for (let i = 0; i < inputsData.length; i++) {
        //get first 28 data as trainings data
        if (i < trainingsDataCount) {
            trainingInputs.push(inputsData[i]);
            trainingLabels.push(labelsData[i][0]);
        } else {
            validationInputs.push(inputsData[i]);
            validationLabels.push(labelsData[i][0]);
        }
    }
    const trainingInputsTensor = tf.tensor2d(trainingInputs, [trainingInputs.length, DATA_KEYS.length]);
    const trainingLabelsTensor = tf.tensor2d(trainingLabels, [trainingLabels.length, 1]);
    const validationInputsTensor = tf.tensor2d(validationInputs, [validationInputs.length, DATA_KEYS.length]);
    const validationLabelsTensor = tf.tensor2d(validationLabels, [validationLabels.length, 1]);
    // Train the model
    await trainModel(model, trainingInputsTensor, trainingLabelsTensor);
    console.log('done training');
    // Make some predictions using the model and compare them to the
    // original data
    testModelWithValidationData(model, data, tensorData, validationInputsTensor, validationLabelsTensor);
}

async function run() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    // More code will be added below
    // Create the model
    const model = createModel(DATA_KEYS.length);
    tfvis.show.modelSummary({ name: "Model Summary" }, model);
    // Convert the data to a form we can use for training.

    const tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;
    // Train the model
    await trainModel(model, inputs, labels);
    console.log('done training');
    // Make some predictions using the model and compare them to the
    // original data
    testModel(model, data, tensorData);
}

function normaliseData(dataList) {
    const inputTensor = tf.tensor2d(dataList, [dataList.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();

    const norm = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    return { min: inputMin, max: inputMax, data: norm, list: norm.arraySync() };
}

function denormaliseData(dataList, min = null, max = null) {
    const inputTensor = tf.tensor2d(dataList, [dataList.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = max ? max : inputTensor.max();
    const inputMin = min ? min : inputTensor.min();
    const denorm = inputTensor.mul(inputMax.sub(inputMin)).add(inputMin);
    return { min: inputMin, max: inputMax, data: denorm };
}

/**
 * Convert the input data to tensors that we can use for machine
 * learning. We will also do the important best practices of _shuffling_
 * the data and _normalizing_ the data
 * MPG on the y-axis.
 */
function convertToTensor(data) {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {
        // Step 1. Shuffle the data
        tf.util.shuffle(data);

        // Step 2. create X_data, Y_data
        const X_data = [];
        const Y_data = data.y;
        const X_data_unNormed = {};
        DATA_KEYS.forEach((e, data_key_index) => {
            X_data_unNormed[e] = [];
        })
        data.x.forEach((d) => {
            DATA_KEYS.forEach((e, data_key_index) => {
                X_data_unNormed[e].push(d[data_key_index]);
            })
            X_data.push(d);
        });
        console.log(data)

        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        //now we have each column as row
        const normalisedColumns = {};
        DATA_KEYS.forEach((e, data_key_index) => {
            normalisedColumns[e] = (normaliseData(X_data_unNormed[e]));
        })

        const X_data_normalised = [];
        for (let i = 0; i < normalisedColumns.a.list.length; i++) {
            const dataStore = [];
            DATA_KEYS.forEach((e, data_key_index) => {
                dataStore.push(normalisedColumns[e].list[i][0]);
            });
            X_data_normalised.push(dataStore);
        }

        const input = tf.tensor2d(X_data_normalised, [
            X_data_normalised.length,
            DATA_KEYS.length,
        ]);
        const labelTensor = tf.tensor2d(Y_data, [Y_data.length, 1]);
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();
        const normalizedLabels = labelTensor
            .sub(labelMin)
            .div(labelMax.sub(labelMin));

        return {
            inputs: input,
            labels: normalizedLabels,
            // Return the min/max bounds so we can use them later.
            normalisedColumns: normalisedColumns,
            labelMax: labelMax,
            labelMin: labelMin,
        };
    });
}

async function trainModel(model, inputs, labels) {
    // Prepare the model for training.
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ["mse"],
    });

    const batchSize = 32;
    const epochs = 100;

    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(
            { name: "Training Performance" },
            ["loss", "mse"],
            { height: 200, callbacks: ["onEpochEnd"] }
        ),
    });
}

function createModel(rowCount) {
    // Create a sequential model
    const model = tf.sequential();

    // Add a single input layer
    model.add(
        tf.layers.dense({ inputShape: [rowCount], units: 1, useBias: true })
    );

    // activations
    model.add(
        tf.layers.dense({ inputShape: [256], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [128], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [64], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [32], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [16], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [8], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [4], units: 32, activation: "relu" })
    );
    model.add(
        tf.layers.dense({ inputShape: [2], units: 32, activation: "relu" })
    );
    // Add an output layer
    model.add(tf.layers.dense({ units: 1, useBias: true }));

    return model;
}

function testModel(model, inputData, normalizationData) {
    const { normalisedColumns, labelMin, labelMax } = normalizationData;
    const columnsCount = DATA_KEYS.length;
    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.
    const [xs, preds] = tf.tidy(() => {
        //how many random rows should we generate
        const xsNormRowCount = 100;
        // const xsNorm = tf.tensor2d(tf.linspace(0, 1, 100), [100, columnsCount]);
        //get random data
        const xsNorm = tf
            .linspace(0, 1, columnsCount * xsNormRowCount)
            .reshape([xsNormRowCount, columnsCount]);

        //predict
        const predictions = model.predict(xsNorm);
        //unnormalise the predictions
        const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);

        //unnormalise the x data
        const unNormXs = [];
        const xsNormData = xsNorm.arraySync();
        const normSeparated = {};
        const unNormedSeparated = {};
        DATA_KEYS.forEach((e, data_key_index) => {
            normSeparated[e] = [];
            unNormedSeparated[e] = [];
        });
        //if u use variable xsNormRowCount, graph is better aligned than xsNormData.length
        const xsNormRowCount2 = xsNormData.length;
        for (let i = 0; i < xsNormRowCount; i++) {
            DATA_KEYS.forEach((e, data_key_index) => {
                normSeparated[e].push(xsNormData[i][data_key_index]);
            });
        }
        console.log(xsNormData.length, xsNormRowCount)

        DATA_KEYS.forEach((e, data_key_index) => {
            unNormedSeparated[e] = (tf.tensor2d(normSeparated[e], [normSeparated[e].length, 1])
                .mul(normalisedColumns[e].max.sub(normalisedColumns[e].min))
                .add(normalisedColumns[e].min)).arraySync();
        });

        for (let i = 0; i < unNormedSeparated.a.length; i++) {
            const dataStore = [];
            DATA_KEYS.forEach((e, data_key_index) => {
                dataStore.push(unNormedSeparated[e][i][0]);
            });
            unNormXs.push(dataStore);
        }
        // Un-normalize the data
        return [unNormXs, unNormPreds.dataSync()];
    });

    const predictedPoints = {}
    //x, y
    const originalPoints = {};
    DATA_KEYS.forEach((e, data_key_index) => {
        predictedPoints[e] = [];
        originalPoints[e] = [];
    });
    Array.from(xs).forEach((val, i) => {
        DATA_KEYS.forEach((e, data_key_index) => {
            predictedPoints[e].push({
                x: val[data_key_index],
                y: preds[i],
            });
        });
    });
    for (let i = 0; i < inputData.x.length; i++) {
        DATA_KEYS.forEach((e, data_key_index) => {
            originalPoints[e].push({
                x: inputData.x[i][data_key_index],
                y: inputData.y[i],
            });
        });
    }

    DATA_KEYS.forEach((e, data_key_index) => {
        tfvis.render.scatterplot(
            { name: "Model Predictions " + e.toUpperCase() + " vs Original Data" },
            {
                values: [originalPoints[e], predictedPoints[e]],
                series: ["original." + e.toUpperCase(), "predicted"],
            },
            {
                xLabel: e.toUpperCase(),
                yLabel: "Result",
                zoomToFit: true,
                height: 300,
            }
        );
    });
}

function testModelWithValidationData(model, inputData, normalizationData, validationInputsTensor, validationLabelsTensor) {
    const { normalisedColumns, labelMin, labelMax } = normalizationData;
    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.
    const [xs, preds, validations] = tf.tidy(() => {
        //predict
        const xsNormData = validationInputsTensor.arraySync();
        const predictions = model.predict(validationInputsTensor);

        //unnormalise the predictions
        const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);
        const unNormValidationLabelsTensor = validationLabelsTensor.mul(labelMax.sub(labelMin)).add(labelMin);

        //unnormalise the x data
        const unNormXs = [];
        const xsNormRowCount = xsNormData.length;
        const normSeparated = {};
        const unNormedSeparated = {};
        DATA_KEYS.forEach((e, data_key_index) => {
            normSeparated[e] = [];
            unNormedSeparated[e] = [];
        });
        for (let i = 0; i < xsNormRowCount; i++) {
            DATA_KEYS.forEach((e, data_key_index) => {
                normSeparated[e].push(xsNormData[i][data_key_index]);
            });
        }
        DATA_KEYS.forEach((e, data_key_index) => {
            unNormedSeparated[e] = (tf.tensor2d(normSeparated[e], [normSeparated[e].length, 1])
                .mul(normalisedColumns[e].max.sub(normalisedColumns[e].min))
                .add(normalisedColumns[e].min)).arraySync();
        });

        for (let i = 0; i < unNormedSeparated.a.length; i++) {
            const dataStore = [];
            DATA_KEYS.forEach((e, data_key_index) => {
                dataStore.push(unNormedSeparated[e][i][0]);
            });
            unNormXs.push(dataStore);
        }
        // Un-normalize the data
        return [unNormXs, unNormPreds.dataSync(), unNormValidationLabelsTensor.dataSync()];
    });


    //x, y
    const predictedPoints = {}
    const validationPoints = {};
    const originalPoints = {};
    DATA_KEYS.forEach((e, data_key_index) => {
        predictedPoints[e] = [];
        validationPoints[e] = [];
        originalPoints[e] = [];
    });
    // const l = [];
    Array.from(xs).forEach((val, i) => {
        DATA_KEYS.forEach((e, data_key_index) => {
            predictedPoints[e].push({
                x: val[data_key_index],
                y: preds[i],
            });
            validationPoints[e].push({
                x: val[data_key_index],
                y: validations[i],
            })
        });
        // l.push({ a: val, b: validations[i], c: preds[i] })
    });
    // console.log(l)

    for (let i = 0; i < inputData.x.length; i++) {
        DATA_KEYS.forEach((e, data_key_index) => {
            originalPoints[e].push({
                x: inputData.x[i][data_key_index],
                y: inputData.y[i],
            });
        });
    }

    DATA_KEYS.forEach((e, data_key_index) => {
        tfvis.render.scatterplot(
            { name: "Model Predictions " + e.toUpperCase() + " vs Original Data" },
            {
                values: [originalPoints[e], predictedPoints[e]],
                series: ["original." + e.toUpperCase(), "predicted"],
            },
            {
                xLabel: e.toUpperCase(),
                yLabel: "Result",
                zoomToFit: true,
                height: 300,
            }
        );
        tfvis.render.scatterplot(
            { name: "Model Predictions " + e.toUpperCase() + " vs Validation Data" },
            {
                values: [validationPoints[e], predictedPoints[e]],
                series: ["validation." + e.toUpperCase(), "predicted"],
            },
            {
                xLabel: e.toUpperCase(),
                yLabel: "D",
                height: 300,
                zoomToFit: true,
            }
        );
    });
}
