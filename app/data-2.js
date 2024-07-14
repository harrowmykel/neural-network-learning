var DATA_KEYS = ['a', 'b', 'c'];
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
            a: d.a, b: d.b, c: d.c, result: d.d
        });
        X_data.push([d.a, d.b, d.c]);
        Y_data.push(d.d);
    });
    displayData(cleaned);

    return { x: X_data, y: Y_data };
}

function displayData(data) {
    DATA_KEYS.forEach((e) => {
        const values = [];
        // const values_messwert = [];
        data.forEach((d) => {
            values.push({
                x: d[e],
                y: d.result,
            });
            // values_messwert.push({
            //     x: d[e],
            //     y: d.result_messwert,
            // });
        });
        tfvis.render.scatterplot(
            { name: e.toUpperCase() + " v Result" },
            {
                values: values,
                series: ["Result"]
            },
            {
                xLabel: e.toUpperCase(),
                yLabel: "Result",
                height: 300,
                zoomToFit: true,
                seriesColors: ['red']
            }
        );
        // tfvis.render.scatterplot(
        //     { name: e.toUpperCase() + " v Result (Messwert)" },
        //     {
        //         values: values_messwert,
        //         series: ["Result (Messwert)"]
        //     },
        //     {
        //         xLabel: e.toUpperCase(),
        //         yLabel: "Result (Messwert)",
        //         height: 300,
        //         zoomToFit: true,
        //         seriesColors: ['green']
        //     }
        // );


        // tfvis.render.scatterplot(
        //     { name: e.toUpperCase() + " v Result/Messwerte" },
        //     {
        //         values: [values, values_messwert],
        //         series: ["Result", "Result (Messwert)"]
        //     },
        //     {
        //         xLabel: e.toUpperCase(),
        //         yLabel: "Result",
        //         height: 300,
        //         zoomToFit: true,
        //         seriesColors: ['red']
        //     }
        // );
    });
}
function start() {
    // run();
    runWithValidationData(28);
}