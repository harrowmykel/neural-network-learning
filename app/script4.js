
/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
async function getData() {
    const carsData = [
        { "a": 4, "b": 0.03, "c": 0, "d": 1.134 },
        { "a": 4, "b": 0.028, "c": 0, "d": 1.104 },
        { "a": 4, "b": 0.026, "c": 0, "d": 1.171 },
        { "a": 4, "b": 0.024, "c": 0, "d": 1.242 },
        { "a": 4, "b": 0.022, "c": 0, "d": 1.174 },
        { "a": 8, "b": 0.03, "c": 0, "d": 1.233 },
        { "a": 8, "b": 0.028, "c": 0, "d": 1.323 },
        { "a": 8, "b": 0.026, "c": 0, "d": 1.372 },
        { "a": 8, "b": 0.024, "c": 0, "d": 1.248 },
        { "a": 8, "b": 0.022, "c": 0, "d": 1.199 },
        { "a": 12, "b": 0.03, "c": 0, "d": 1.502 },
        { "a": 12, "b": 0.028, "c": 0, "d": 1.328 },
        { "a": 12, "b": 0.026, "c": 0, "d": 1.479 },
        { "a": 12, "b": 0.024, "c": 0, "d": 1.386 },
        { "a": 12, "b": 0.022, "c": 0, "d": 1.302 },
        { "a": 24, "b": 0.03, "c": 0, "d": 1.719 },
        { "a": 24, "b": 0.028, "c": 0, "d": 1.785 },
        { "a": 24, "b": 0.026, "c": 0, "d": 1.942 },
        { "a": 24, "b": 0.024, "c": 0, "d": 1.957 },
        { "a": 24, "b": 0.022, "c": 0, "d": 1.963 },
        { "a": 4, "b": 0.03, "c": 1, "d": 1.009 },
        { "a": 4, "b": 0.028, "c": 1, "d": 1.042 },
        { "a": 4, "b": 0.026, "c": 1, "d": 1.064 },
        { "a": 4, "b": 0.024, "c": 1, "d": 1.047 },
        { "a": 4, "b": 0.022, "c": 1, "d": 1.134 },
        { "a": 8, "b": 0.03, "c": 1, "d": 1.257 },
        { "a": 8, "b": 0.028, "c": 1, "d": 1.265 },
        { "a": 8, "b": 0.026, "c": 1, "d": 1.387 },
        { "a": 8, "b": 0.024, "c": 1, "d": 1.189 },
        { "a": 8, "b": 0.022, "c": 1, "d": 1.269 },
        { "a": 12, "b": 0.03, "c": 1, "d": 1.406 },
        { "a": 12, "b": 0.028, "c": 1, "d": 1.398 },
        { "a": 12, "b": 0.026, "c": 1, "d": 1.429 },
        { "a": 12, "b": 0.024, "c": 1, "d": 1.486 },
        { "a": 12, "b": 0.022, "c": 1, "d": 1.507 },
        { "a": 24, "b": 0.03, "c": 1, "d": 1.767 },
        { "a": 24, "b": 0.028, "c": 1, "d": 1.872 },
        { "a": 24, "b": 0.026, "c": 1, "d": 1.905 },
        { "a": 24, "b": 0.024, "c": 1, "d": 1.825 },
        { "a": 24, "b": 0.022, "c": 1, "d": 1.808 },
    ];
    const cleaned = [];
    const X_data = [];
    const Y_data = [];
    carsData.forEach((d) => {
        // if (!d.a || !d.b || !d.c) {
        //     return;
        // }
        cleaned.push({
            a: d.a, b: d.b, c: d.c, d: d.d
        });
        X_data.push([d.a, d.b, d.c]);
        Y_data.push(d.d);
    });
    displayData(cleaned);

    return { x: X_data, y: Y_data };
}

function displayData(data) {
    const keys = ['a', 'b', 'c'];
    keys.forEach((e) => {
        const values = [];
        data.forEach((d) => {
            values.push({
                x: d[e],
                y: d.result,
            });
        });

        tfvis.render.scatterplot(
            { name: e.toUpperCase() + " v D" },
            { values: values },
            {
                xLabel: e.toUpperCase(),
                yLabel: "D",
                height: 300,
            }
        );
    });
}

async function runWithValidationData() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    // shuffle
    // shuffleArray(data);

    // More code will be added below
    // Create the model
    const model = createModel(3);
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
    for (i = 0; i < inputsData.length; i++) {
        //get first 28 data as trainings data
        if (i < 28) {
            trainingInputs.push(inputsData[i]);
            trainingLabels.push(labelsData[i][0]);
        } else {
            validationInputs.push(inputsData[i]);
            validationLabels.push(labelsData[i][0]);
        }
    }
    const trainingInputsTensor = tf.tensor2d(trainingInputs, [trainingInputs.length, 3]);
    const trainingLabelsTensor = tf.tensor2d(trainingLabels, [trainingLabels.length, 1]);
    const validationInputsTensor = tf.tensor2d(validationInputs, [validationInputs.length, 3]);
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
    const model = createModel(3);
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
        const X_data_unNormed = { a: [], b: [], c: [] };
        data.x.forEach((d) => {
            X_data_unNormed.a.push(d[0]);
            X_data_unNormed.b.push(d[1]);
            X_data_unNormed.c.push(d[2]);
            X_data.push(d);
        });
        console.log(data)

        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        //now we have each column as row
        const normalisedColumns = {};
        normalisedColumns.a = (normaliseData(X_data_unNormed.a));
        normalisedColumns.b = (normaliseData(X_data_unNormed.b));
        normalisedColumns.c = (normaliseData(X_data_unNormed.c));

        const X_data_normalised = [];
        for (let i = 0; i < normalisedColumns.a.list.length; i++) {
            X_data_normalised.push([
                normalisedColumns.a.list[i][0],
                normalisedColumns.b.list[i][0],
                normalisedColumns.c.list[i][0],
            ]);
        }

        const input = tf.tensor2d(X_data_normalised, [
            X_data_normalised.length,
            3,
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
    const columnsCount = 3;
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
        const normSeparated = { a: [], b: [], c: [] };
        const unNormedSeparated = { a: [], b: [], c: [] };
        //if u use variable xsNormRowCount, graph is better aligned than xsNormData.length
        const xsNormRowCount2 = xsNormData.length;
        for (let i = 0; i < xsNormRowCount; i++) {
            // for (let i = 0; i < xsNormRowCount2; i++) {
            // for (let i = 0; i < xsNormData.length; i++) {
            normSeparated.a.push(xsNormData[i][0]);
            normSeparated.b.push(xsNormData[i][1]);
            normSeparated.c.push(xsNormData[i][2]);
        }
        console.log(xsNormData.length, xsNormRowCount)

        unNormedSeparated.a = (tf.tensor2d(normSeparated.a, [normSeparated.a.length, 1])
            .mul(normalisedColumns.a.max.sub(normalisedColumns.a.min))
            .add(normalisedColumns.a.min)).arraySync();
        unNormedSeparated.b = (tf.tensor2d(normSeparated.b, [normSeparated.b.length, 1])
            .mul(normalisedColumns.b.max.sub(normalisedColumns.b.min))
            .add(normalisedColumns.b.min)).arraySync();
        unNormedSeparated.c = (tf.tensor2d(normSeparated.c, [normSeparated.c.length, 1])
            .mul(normalisedColumns.c.max.sub(normalisedColumns.c.min))
            .add(normalisedColumns.c.min)).arraySync();

        for (let i = 0; i < unNormedSeparated.a.length; i++) {
            unNormXs.push([
                unNormedSeparated.a[i][0],
                unNormedSeparated.b[i][0],
                unNormedSeparated.c[i][0],
            ]);
        }
        // Un-normalize the data
        return [unNormXs, unNormPreds.dataSync()];
    });

    const predictedPoints = {
        a: [],
        b: [],
        c: [],
    }
    Array.from(xs).forEach((val, i) => {
        predictedPoints.a.push({
            x: val[0],
            y: preds[i],
        })
        predictedPoints.b.push({
            x: val[1],
            y: preds[i],
        })
        predictedPoints.c.push({
            x: val[2],
            y: preds[i],
        })
    });
    //x, y
    const originalPoints = {
        a: [],
        b: [],
        c: [],
    };
    for (let i = 0; i < inputData.x.length; i++) {
        originalPoints.a.push({
            x: inputData.x[i][0],
            y: inputData.y[i],
        })
        originalPoints.b.push({
            x: inputData.x[i][1],
            y: inputData.y[i],
        })
        originalPoints.c.push({
            x: inputData.x[i][2],
            y: inputData.y[i],
        })
    }

    tfvis.render.scatterplot(
        { name: "Model Predictions vs Original Data" },
        {
            values: [originalPoints.a, predictedPoints.a],
            series: ["original.A", "predicted"],
        },
        {
            xLabel: "A",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions B vs Original Data" },
        {
            values: [originalPoints.b, predictedPoints.b],
            series: ["original.B", "predicted"],
        },
        {
            xLabel: "B",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions C vs Original Data" },
        {
            values: [originalPoints.c, predictedPoints.c],
            series: ["original.C", "predicted"],
        },
        {
            xLabel: "C",
            yLabel: "D",
            height: 300,
        }
    );
}

function testModelWithValidationData(model, inputData, normalizationData, validationInputsTensor, validationLabelsTensor) {
    const { normalisedColumns, labelMin, labelMax } = normalizationData;
    const columnsCount = 3;
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
        const normSeparated = { a: [], b: [], c: [] };
        const unNormedSeparated = { a: [], b: [], c: [] };
        for (let i = 0; i < xsNormRowCount; i++) {
            normSeparated.a.push(xsNormData[i][0]);
            normSeparated.b.push(xsNormData[i][1]);
            normSeparated.c.push(xsNormData[i][2]);
        }
        unNormedSeparated.a = (tf.tensor2d(normSeparated.a, [normSeparated.a.length, 1])
            .mul(normalisedColumns.a.max.sub(normalisedColumns.a.min))
            .add(normalisedColumns.a.min)).arraySync();
        unNormedSeparated.b = (tf.tensor2d(normSeparated.b, [normSeparated.b.length, 1])
            .mul(normalisedColumns.b.max.sub(normalisedColumns.b.min))
            .add(normalisedColumns.b.min)).arraySync();
        unNormedSeparated.c = (tf.tensor2d(normSeparated.c, [normSeparated.c.length, 1])
            .mul(normalisedColumns.c.max.sub(normalisedColumns.c.min))
            .add(normalisedColumns.c.min)).arraySync();

        for (let i = 0; i < unNormedSeparated.a.length; i++) {
            unNormXs.push([
                unNormedSeparated.a[i][0],
                unNormedSeparated.b[i][0],
                unNormedSeparated.c[i][0],
            ]);
        }
        // Un-normalize the data
        return [unNormXs, unNormPreds.dataSync(), unNormValidationLabelsTensor.dataSync()];
    });


    //x, y
    const predictedPoints = {
        a: [],
        b: [],
        c: [],
    }
    const validationPoints = {
        a: [],
        b: [],
        c: [],
    };
    // const l = [];
    Array.from(xs).forEach((val, i) => {
        predictedPoints.a.push({
            x: val[0],
            y: preds[i],
        })
        predictedPoints.b.push({
            x: val[1],
            y: preds[i],
        })
        predictedPoints.c.push({
            x: val[2],
            y: preds[i],
        })
        validationPoints.a.push({
            x: val[0],
            y: validations[i],
        })
        validationPoints.b.push({
            x: val[1],
            y: validations[i],
        })
        validationPoints.c.push({
            x: val[2],
            y: validations[i],
        })
        // l.push({ a: val, b: validations[i], c: preds[i] })
    });
    // console.log(l)
    //x, y
    const originalPoints = {
        a: [],
        b: [],
        c: [],
    };
    for (let i = 0; i < inputData.x.length; i++) {
        originalPoints.a.push({
            x: inputData.x[i][0],
            y: inputData.y[i],
        })
        originalPoints.b.push({
            x: inputData.x[i][2],
            y: inputData.y[i],
        })
        originalPoints.c.push({
            x: inputData.x[i][2],
            y: inputData.y[i],
        })
    }

    tfvis.render.scatterplot(
        { name: "Model Predictions vs Original Data" },
        {
            values: [originalPoints.a, predictedPoints.a],
            series: ["original.A", "predicted"],
        },
        {
            xLabel: "A",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions B vs Original Data" },
        {
            values: [originalPoints.b, predictedPoints.b],
            series: ["original.B", "predicted"],
        },
        {
            xLabel: "B",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions C vs Original Data" },
        {
            values: [originalPoints.c, predictedPoints.c],
            series: ["original.C", "predicted"],
        },
        {
            xLabel: "C",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions vs Validation Data" },
        {
            values: [validationPoints.a, predictedPoints.a],
            series: ["validation.A", "predicted"],
        },
        {
            xLabel: "A",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions B vs Validation Data" },
        {
            values: [validationPoints.b, predictedPoints.b],
            series: ["validation.B", "predicted"],
        },
        {
            xLabel: "B",
            yLabel: "D",
            height: 300,
        }
    );
    tfvis.render.scatterplot(
        { name: "Model Predictions C vs Validation Data" },
        {
            values: [validationPoints.c, predictedPoints.c],
            series: ["validation.C", "predicted"],
        },
        {
            xLabel: "C",
            yLabel: "D",
            height: 300,
        }
    );
}
