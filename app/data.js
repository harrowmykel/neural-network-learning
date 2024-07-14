var DATA_KEYS = ['a', 'b', 'c', 'd', 'e'];
/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
async function getData() {
    const carsData = [
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.123,
            "p_messwert": 1.14,
            "zufallzahl_0_1": 0.648,
            "zufallzahl_m1_1": 0.296
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.127,
            "p_messwert": 1.127,
            "zufallzahl_0_1": 0.498,
            "zufallzahl_m1_1": -0.005
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.132,
            "p_messwert": 1.21,
            "zufallzahl_0_1": 0.843,
            "zufallzahl_m1_1": 0.686
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.137,
            "p_messwert": 1.168,
            "zufallzahl_0_1": 0.636,
            "zufallzahl_m1_1": 0.272
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.144,
            "p_messwert": 1.086,
            "zufallzahl_0_1": 0.247,
            "zufallzahl_m1_1": -0.507
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.246,
            "p_messwert": 1.166,
            "zufallzahl_0_1": 0.18,
            "zufallzahl_m1_1": -0.64
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.254,
            "p_messwert": 1.145,
            "zufallzahl_0_1": 0.063,
            "zufallzahl_m1_1": -0.875
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.264,
            "p_messwert": 1.236,
            "zufallzahl_0_1": 0.389,
            "zufallzahl_m1_1": -0.221
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.275,
            "p_messwert": 1.214,
            "zufallzahl_0_1": 0.26,
            "zufallzahl_m1_1": -0.481
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.287,
            "p_messwert": 1.309,
            "zufallzahl_0_1": 0.586,
            "zufallzahl_m1_1": 0.172
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.369,
            "p_messwert": 1.417,
            "zufallzahl_0_1": 0.677,
            "zufallzahl_m1_1": 0.354
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.382,
            "p_messwert": 1.282,
            "zufallzahl_0_1": 0.139,
            "zufallzahl_m1_1": -0.721
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.396,
            "p_messwert": 1.302,
            "zufallzahl_0_1": 0.163,
            "zufallzahl_m1_1": -0.673
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.412,
            "p_messwert": 1.544,
            "zufallzahl_0_1": 0.968,
            "zufallzahl_m1_1": 0.937
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.431,
            "p_messwert": 1.414,
            "zufallzahl_0_1": 0.442,
            "zufallzahl_m1_1": -0.117
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.737,
            "p_messwert": 1.597,
            "zufallzahl_0_1": 0.097,
            "zufallzahl_m1_1": -0.807
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.763,
            "p_messwert": 1.819,
            "zufallzahl_0_1": 0.659,
            "zufallzahl_m1_1": 0.317
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.792,
            "p_messwert": 1.9,
            "zufallzahl_0_1": 0.802,
            "zufallzahl_m1_1": 0.604
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.824,
            "p_messwert": 1.971,
            "zufallzahl_0_1": 0.901,
            "zufallzahl_m1_1": 0.803
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.861,
            "p_messwert": 1.768,
            "zufallzahl_0_1": 0.249,
            "zufallzahl_m1_1": -0.503
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.123,
            "p_messwert": 1.124,
            "zufallzahl_0_1": 0.556,
            "zufallzahl_m1_1": 0.112
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.127,
            "p_messwert": 1.023,
            "zufallzahl_0_1": 0.036,
            "zufallzahl_m1_1": -0.928
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.132,
            "p_messwert": 1.113,
            "zufallzahl_0_1": 0.415,
            "zufallzahl_m1_1": -0.171
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.137,
            "p_messwert": 1.06,
            "zufallzahl_0_1": 0.162,
            "zufallzahl_m1_1": -0.677
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.144,
            "p_messwert": 1.156,
            "zufallzahl_0_1": 0.557,
            "zufallzahl_m1_1": 0.113
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.246,
            "p_messwert": 1.122,
            "zufallzahl_0_1": 0.003,
            "zufallzahl_m1_1": -0.994
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.254,
            "p_messwert": 1.332,
            "zufallzahl_0_1": 0.81,
            "zufallzahl_m1_1": 0.621
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.264,
            "p_messwert": 1.281,
            "zufallzahl_0_1": 0.566,
            "zufallzahl_m1_1": 0.131
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.275,
            "p_messwert": 1.329,
            "zufallzahl_0_1": 0.714,
            "zufallzahl_m1_1": 0.428
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.287,
            "p_messwert": 1.389,
            "zufallzahl_0_1": 0.897,
            "zufallzahl_m1_1": 0.793
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.369,
            "p_messwert": 1.251,
            "zufallzahl_0_1": 0.071,
            "zufallzahl_m1_1": -0.859
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.382,
            "p_messwert": 1.339,
            "zufallzahl_0_1": 0.348,
            "zufallzahl_m1_1": -0.305
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.396,
            "p_messwert": 1.279,
            "zufallzahl_0_1": 0.079,
            "zufallzahl_m1_1": -0.841
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.412,
            "p_messwert": 1.288,
            "zufallzahl_0_1": 0.059,
            "zufallzahl_m1_1": -0.883
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.431,
            "p_messwert": 1.41,
            "zufallzahl_0_1": 0.428,
            "zufallzahl_m1_1": -0.144
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.737,
            "p_messwert": 1.585,
            "zufallzahl_0_1": 0.061,
            "zufallzahl_m1_1": -0.878
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.763,
            "p_messwert": 1.66,
            "zufallzahl_0_1": 0.208,
            "zufallzahl_m1_1": -0.584
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.792,
            "p_messwert": 1.634,
            "zufallzahl_0_1": 0.058,
            "zufallzahl_m1_1": -0.884
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.824,
            "p_messwert": 1.724,
            "zufallzahl_0_1": 0.225,
            "zufallzahl_m1_1": -0.55
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.861,
            "p_messwert": 1.905,
            "zufallzahl_0_1": 0.618,
            "zufallzahl_m1_1": 0.235
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.123,
            "p_messwert": 1.058,
            "zufallzahl_0_1": 0.209,
            "zufallzahl_m1_1": -0.581
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.127,
            "p_messwert": 1.169,
            "zufallzahl_0_1": 0.684,
            "zufallzahl_m1_1": 0.368
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.132,
            "p_messwert": 1.116,
            "zufallzahl_0_1": 0.429,
            "zufallzahl_m1_1": -0.142
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.137,
            "p_messwert": 1.217,
            "zufallzahl_0_1": 0.849,
            "zufallzahl_m1_1": 0.699
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.144,
            "p_messwert": 1.191,
            "zufallzahl_0_1": 0.709,
            "zufallzahl_m1_1": 0.418
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.246,
            "p_messwert": 1.127,
            "zufallzahl_0_1": 0.023,
            "zufallzahl_m1_1": -0.954
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.254,
            "p_messwert": 1.138,
            "zufallzahl_0_1": 0.037,
            "zufallzahl_m1_1": -0.927
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.264,
            "p_messwert": 1.139,
            "zufallzahl_0_1": 0.006,
            "zufallzahl_m1_1": -0.988
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.275,
            "p_messwert": 1.236,
            "zufallzahl_0_1": 0.346,
            "zufallzahl_m1_1": -0.307
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.287,
            "p_messwert": 1.215,
            "zufallzahl_0_1": 0.221,
            "zufallzahl_m1_1": -0.558
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.369,
            "p_messwert": 1.254,
            "zufallzahl_0_1": 0.081,
            "zufallzahl_m1_1": -0.837
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.382,
            "p_messwert": 1.275,
            "zufallzahl_0_1": 0.115,
            "zufallzahl_m1_1": -0.77
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.396,
            "p_messwert": 1.535,
            "zufallzahl_0_1": 0.998,
            "zufallzahl_m1_1": 0.997
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.412,
            "p_messwert": 1.31,
            "zufallzahl_0_1": 0.137,
            "zufallzahl_m1_1": -0.726
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.431,
            "p_messwert": 1.339,
            "zufallzahl_0_1": 0.18,
            "zufallzahl_m1_1": -0.64
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.737,
            "p_messwert": 1.843,
            "zufallzahl_0_1": 0.805,
            "zufallzahl_m1_1": 0.609
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.763,
            "p_messwert": 1.728,
            "zufallzahl_0_1": 0.4,
            "zufallzahl_m1_1": -0.201
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.792,
            "p_messwert": 1.73,
            "zufallzahl_0_1": 0.326,
            "zufallzahl_m1_1": -0.349
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.824,
            "p_messwert": 1.892,
            "zufallzahl_0_1": 0.685,
            "zufallzahl_m1_1": 0.369
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.861,
            "p_messwert": 1.98,
            "zufallzahl_0_1": 0.82,
            "zufallzahl_m1_1": 0.639
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.123,
            "p_messwert": 1.035,
            "zufallzahl_0_1": 0.11,
            "zufallzahl_m1_1": -0.78
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.127,
            "p_messwert": 1.026,
            "zufallzahl_0_1": 0.05,
            "zufallzahl_m1_1": -0.9
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.132,
            "p_messwert": 1.215,
            "zufallzahl_0_1": 0.864,
            "zufallzahl_m1_1": 0.729
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.137,
            "p_messwert": 1.107,
            "zufallzahl_0_1": 0.364,
            "zufallzahl_m1_1": -0.271
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.144,
            "p_messwert": 1.184,
            "zufallzahl_0_1": 0.679,
            "zufallzahl_m1_1": 0.358
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.246,
            "p_messwert": 1.301,
            "zufallzahl_0_1": 0.724,
            "zufallzahl_m1_1": 0.447
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.254,
            "p_messwert": 1.253,
            "zufallzahl_0_1": 0.495,
            "zufallzahl_m1_1": -0.01
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.264,
            "p_messwert": 1.283,
            "zufallzahl_0_1": 0.575,
            "zufallzahl_m1_1": 0.15
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.275,
            "p_messwert": 1.188,
            "zufallzahl_0_1": 0.161,
            "zufallzahl_m1_1": -0.679
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.287,
            "p_messwert": 1.249,
            "zufallzahl_0_1": 0.353,
            "zufallzahl_m1_1": -0.294
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.369,
            "p_messwert": 1.463,
            "zufallzahl_0_1": 0.845,
            "zufallzahl_m1_1": 0.691
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.382,
            "p_messwert": 1.312,
            "zufallzahl_0_1": 0.249,
            "zufallzahl_m1_1": -0.502
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.396,
            "p_messwert": 1.407,
            "zufallzahl_0_1": 0.538,
            "zufallzahl_m1_1": 0.076
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.412,
            "p_messwert": 1.307,
            "zufallzahl_0_1": 0.128,
            "zufallzahl_m1_1": -0.744
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.431,
            "p_messwert": 1.325,
            "zufallzahl_0_1": 0.131,
            "zufallzahl_m1_1": -0.737
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.737,
            "p_messwert": 1.908,
            "zufallzahl_0_1": 0.991,
            "zufallzahl_m1_1": 0.983
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.763,
            "p_messwert": 1.842,
            "zufallzahl_0_1": 0.724,
            "zufallzahl_m1_1": 0.447
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.792,
            "p_messwert": 1.735,
            "zufallzahl_0_1": 0.34,
            "zufallzahl_m1_1": -0.321
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.824,
            "p_messwert": 1.758,
            "zufallzahl_0_1": 0.319,
            "zufallzahl_m1_1": -0.362
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.861,
            "p_messwert": 1.813,
            "zufallzahl_0_1": 0.372,
            "zufallzahl_m1_1": -0.256
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.123,
            "p_messwert": 1.144,
            "zufallzahl_0_1": 0.592,
            "zufallzahl_m1_1": 0.184
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.127,
            "p_messwert": 1.215,
            "zufallzahl_0_1": 0.89,
            "zufallzahl_m1_1": 0.78
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.132,
            "p_messwert": 1.218,
            "zufallzahl_0_1": 0.881,
            "zufallzahl_m1_1": 0.762
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.137,
            "p_messwert": 1.128,
            "zufallzahl_0_1": 0.458,
            "zufallzahl_m1_1": -0.085
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.144,
            "p_messwert": 1.037,
            "zufallzahl_0_1": 0.035,
            "zufallzahl_m1_1": -0.929
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.246,
            "p_messwert": 1.203,
            "zufallzahl_0_1": 0.326,
            "zufallzahl_m1_1": -0.347
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.254,
            "p_messwert": 1.174,
            "zufallzahl_0_1": 0.181,
            "zufallzahl_m1_1": -0.637
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.264,
            "p_messwert": 1.371,
            "zufallzahl_0_1": 0.922,
            "zufallzahl_m1_1": 0.844
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.275,
            "p_messwert": 1.296,
            "zufallzahl_0_1": 0.585,
            "zufallzahl_m1_1": 0.169
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.287,
            "p_messwert": 1.259,
            "zufallzahl_0_1": 0.389,
            "zufallzahl_m1_1": -0.221
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.369,
            "p_messwert": 1.445,
            "zufallzahl_0_1": 0.779,
            "zufallzahl_m1_1": 0.558
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.382,
            "p_messwert": 1.396,
            "zufallzahl_0_1": 0.551,
            "zufallzahl_m1_1": 0.103
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.396,
            "p_messwert": 1.481,
            "zufallzahl_0_1": 0.804,
            "zufallzahl_m1_1": 0.608
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.412,
            "p_messwert": 1.39,
            "zufallzahl_0_1": 0.422,
            "zufallzahl_m1_1": -0.157
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.431,
            "p_messwert": 1.329,
            "zufallzahl_0_1": 0.144,
            "zufallzahl_m1_1": -0.711
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.737,
            "p_messwert": 1.766,
            "zufallzahl_0_1": 0.582,
            "zufallzahl_m1_1": 0.164
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.763,
            "p_messwert": 1.822,
            "zufallzahl_0_1": 0.666,
            "zufallzahl_m1_1": 0.331
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.792,
            "p_messwert": 1.777,
            "zufallzahl_0_1": 0.458,
            "zufallzahl_m1_1": -0.084
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.824,
            "p_messwert": 1.645,
            "zufallzahl_0_1": 0.008,
            "zufallzahl_m1_1": -0.984
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.861,
            "p_messwert": 1.929,
            "zufallzahl_0_1": 0.682,
            "zufallzahl_m1_1": 0.363
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.123,
            "p_messwert": 1.046,
            "zufallzahl_0_1": 0.156,
            "zufallzahl_m1_1": -0.688
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.127,
            "p_messwert": 1.136,
            "zufallzahl_0_1": 0.539,
            "zufallzahl_m1_1": 0.077
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.132,
            "p_messwert": 1.143,
            "zufallzahl_0_1": 0.548,
            "zufallzahl_m1_1": 0.097
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.137,
            "p_messwert": 1.086,
            "zufallzahl_0_1": 0.275,
            "zufallzahl_m1_1": -0.45
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.144,
            "p_messwert": 1.15,
            "zufallzahl_0_1": 0.528,
            "zufallzahl_m1_1": 0.056
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.246,
            "p_messwert": 1.351,
            "zufallzahl_0_1": 0.924,
            "zufallzahl_m1_1": 0.848
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.254,
            "p_messwert": 1.245,
            "zufallzahl_0_1": 0.464,
            "zufallzahl_m1_1": -0.072
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.264,
            "p_messwert": 1.304,
            "zufallzahl_0_1": 0.659,
            "zufallzahl_m1_1": 0.318
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.275,
            "p_messwert": 1.229,
            "zufallzahl_0_1": 0.321,
            "zufallzahl_m1_1": -0.357
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.287,
            "p_messwert": 1.334,
            "zufallzahl_0_1": 0.682,
            "zufallzahl_m1_1": 0.364
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.369,
            "p_messwert": 1.443,
            "zufallzahl_0_1": 0.772,
            "zufallzahl_m1_1": 0.545
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.382,
            "p_messwert": 1.257,
            "zufallzahl_0_1": 0.048,
            "zufallzahl_m1_1": -0.904
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.396,
            "p_messwert": 1.4,
            "zufallzahl_0_1": 0.516,
            "zufallzahl_m1_1": 0.031
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.412,
            "p_messwert": 1.275,
            "zufallzahl_0_1": 0.014,
            "zufallzahl_m1_1": -0.971
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.431,
            "p_messwert": 1.404,
            "zufallzahl_0_1": 0.409,
            "zufallzahl_m1_1": -0.182
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.737,
            "p_messwert": 1.585,
            "zufallzahl_0_1": 0.062,
            "zufallzahl_m1_1": -0.875
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.763,
            "p_messwert": 1.801,
            "zufallzahl_0_1": 0.608,
            "zufallzahl_m1_1": 0.217
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.792,
            "p_messwert": 1.822,
            "zufallzahl_0_1": 0.585,
            "zufallzahl_m1_1": 0.169
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.824,
            "p_messwert": 1.86,
            "zufallzahl_0_1": 0.597,
            "zufallzahl_m1_1": 0.195
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.861,
            "p_messwert": 1.987,
            "zufallzahl_0_1": 0.838,
            "zufallzahl_m1_1": 0.676
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.123,
            "p_messwert": 1.152,
            "zufallzahl_0_1": 0.628,
            "zufallzahl_m1_1": 0.255
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.127,
            "p_messwert": 1.044,
            "zufallzahl_0_1": 0.13,
            "zufallzahl_m1_1": -0.741
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.132,
            "p_messwert": 1.234,
            "zufallzahl_0_1": 0.949,
            "zufallzahl_m1_1": 0.898
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.137,
            "p_messwert": 1.225,
            "zufallzahl_0_1": 0.883,
            "zufallzahl_m1_1": 0.767
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.144,
            "p_messwert": 1.09,
            "zufallzahl_0_1": 0.266,
            "zufallzahl_m1_1": -0.468
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.246,
            "p_messwert": 1.356,
            "zufallzahl_0_1": 0.944,
            "zufallzahl_m1_1": 0.888
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.254,
            "p_messwert": 1.355,
            "zufallzahl_0_1": 0.899,
            "zufallzahl_m1_1": 0.798
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.264,
            "p_messwert": 1.216,
            "zufallzahl_0_1": 0.312,
            "zufallzahl_m1_1": -0.376
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.275,
            "p_messwert": 1.259,
            "zufallzahl_0_1": 0.437,
            "zufallzahl_m1_1": -0.126
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.287,
            "p_messwert": 1.287,
            "zufallzahl_0_1": 0.499,
            "zufallzahl_m1_1": -0.002
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.369,
            "p_messwert": 1.358,
            "zufallzahl_0_1": 0.46,
            "zufallzahl_m1_1": -0.079
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.382,
            "p_messwert": 1.377,
            "zufallzahl_0_1": 0.483,
            "zufallzahl_m1_1": -0.033
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.396,
            "p_messwert": 1.321,
            "zufallzahl_0_1": 0.231,
            "zufallzahl_m1_1": -0.537
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.412,
            "p_messwert": 1.432,
            "zufallzahl_0_1": 0.569,
            "zufallzahl_m1_1": 0.139
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.431,
            "p_messwert": 1.51,
            "zufallzahl_0_1": 0.779,
            "zufallzahl_m1_1": 0.558
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.737,
            "p_messwert": 1.861,
            "zufallzahl_0_1": 0.856,
            "zufallzahl_m1_1": 0.711
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.763,
            "p_messwert": 1.814,
            "zufallzahl_0_1": 0.643,
            "zufallzahl_m1_1": 0.286
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.792,
            "p_messwert": 1.696,
            "zufallzahl_0_1": 0.233,
            "zufallzahl_m1_1": -0.535
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.824,
            "p_messwert": 1.872,
            "zufallzahl_0_1": 0.63,
            "zufallzahl_m1_1": 0.26
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 0,
            "p_theorie": 1.861,
            "p_messwert": 1.955,
            "zufallzahl_0_1": 0.753,
            "zufallzahl_m1_1": 0.507
        },
        {
            "v": 4,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.123,
            "p_messwert": 1.12,
            "zufallzahl_0_1": 0.488,
            "zufallzahl_m1_1": -0.024
        },
        {
            "v": 4,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.127,
            "p_messwert": 1.225,
            "zufallzahl_0_1": 0.934,
            "zufallzahl_m1_1": 0.869
        },
        {
            "v": 4,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.132,
            "p_messwert": 1.148,
            "zufallzahl_0_1": 0.572,
            "zufallzahl_m1_1": 0.145
        },
        {
            "v": 4,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.137,
            "p_messwert": 1.081,
            "zufallzahl_0_1": 0.25,
            "zufallzahl_m1_1": -0.5
        },
        {
            "v": 4,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.144,
            "p_messwert": 1.255,
            "zufallzahl_0_1": 0.986,
            "zufallzahl_m1_1": 0.972
        },
        {
            "v": 8,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.246,
            "p_messwert": 1.324,
            "zufallzahl_0_1": 0.815,
            "zufallzahl_m1_1": 0.629
        },
        {
            "v": 8,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.254,
            "p_messwert": 1.335,
            "zufallzahl_0_1": 0.819,
            "zufallzahl_m1_1": 0.639
        },
        {
            "v": 8,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.264,
            "p_messwert": 1.317,
            "zufallzahl_0_1": 0.708,
            "zufallzahl_m1_1": 0.416
        },
        {
            "v": 8,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.275,
            "p_messwert": 1.2,
            "zufallzahl_0_1": 0.206,
            "zufallzahl_m1_1": -0.589
        },
        {
            "v": 8,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.287,
            "p_messwert": 1.341,
            "zufallzahl_0_1": 0.709,
            "zufallzahl_m1_1": 0.417
        },
        {
            "v": 12,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.369,
            "p_messwert": 1.367,
            "zufallzahl_0_1": 0.494,
            "zufallzahl_m1_1": -0.012
        },
        {
            "v": 12,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.382,
            "p_messwert": 1.259,
            "zufallzahl_0_1": 0.057,
            "zufallzahl_m1_1": -0.886
        },
        {
            "v": 12,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.396,
            "p_messwert": 1.503,
            "zufallzahl_0_1": 0.884,
            "zufallzahl_m1_1": 0.768
        },
        {
            "v": 12,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.412,
            "p_messwert": 1.339,
            "zufallzahl_0_1": 0.24,
            "zufallzahl_m1_1": -0.519
        },
        {
            "v": 12,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.431,
            "p_messwert": 1.445,
            "zufallzahl_0_1": 0.551,
            "zufallzahl_m1_1": 0.103
        },
        {
            "v": 24,
            "d": 0.03,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.737,
            "p_messwert": 1.597,
            "zufallzahl_0_1": 0.097,
            "zufallzahl_m1_1": -0.805
        },
        {
            "v": 24,
            "d": 0.028,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.763,
            "p_messwert": 1.639,
            "zufallzahl_0_1": 0.147,
            "zufallzahl_m1_1": -0.707
        },
        {
            "v": 24,
            "d": 0.026,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.792,
            "p_messwert": 1.852,
            "zufallzahl_0_1": 0.667,
            "zufallzahl_m1_1": 0.334
        },
        {
            "v": 24,
            "d": 0.024,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.824,
            "p_messwert": 1.824,
            "zufallzahl_0_1": 0.5,
            "zufallzahl_m1_1": -0.001
        },
        {
            "v": 24,
            "d": 0.022,
            "m": 0,
            "c": 0,
            "r": 1,
            "p_theorie": 1.861,
            "p_messwert": 1.812,
            "zufallzahl_0_1": 0.369,
            "zufallzahl_m1_1": -0.261
        }

    ];
    const cleaned = [];
    const X_data = [];
    const Y_data = [];
    const Y_data_messwert = [];
    carsData.forEach((d) => {
        // if (!d.a || !d.b || !d.c) {
        //     return;
        // }
        cleaned.push({
            a: d.v,
            b: d.d,
            c: d.m,
            d: d.c,
            e: d.r,
            result: d.p_theorie,
            result_messwert: d.p_messwert
        });
        X_data.push([d.v, d.d, d.m, d.c, d.r]);
        Y_data.push(d.p_theorie);
        Y_data_messwert.push(d.p_messwert);
    });
    displayData(cleaned);

    return { x: X_data, y: Y_data, y_2: Y_data_messwert };
}

function displayData(data) {
    DATA_KEYS.forEach((e) => {
        const values = [];
        const values_messwert = [];
        data.forEach((d) => {
            values.push({
                x: d[e],
                y: d.result,
            });
            values_messwert.push({
                x: d[e],
                y: d.result_messwert,
            });
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
        tfvis.render.scatterplot(
            { name: e.toUpperCase() + " v Result (Messwert)" },
            {
                values: values_messwert,
                series: ["Result (Messwert)"]
            },
            {
                xLabel: e.toUpperCase(),
                yLabel: "Result (Messwert)",
                height: 300,
                zoomToFit: true,
                seriesColors: ['green']
            }
        );


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
    runWithValidationData(120);
}