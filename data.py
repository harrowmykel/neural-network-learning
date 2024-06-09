import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
import sys


def get_data(training_rows_count=17):
    data = pd.read_csv("./train.csv")
    data = np.array(data)
    m, n = data.shape
    np.random.shuffle(data)  # shuffle before splitting into dev and training sets
    # train with how many rows
    data_dev = data[0:training_rows_count].T
    Y_dev = (data_dev[3]).T
    X_dev = (data_dev[0:3]).T

    data_train = data[training_rows_count:m].T
    Y_train = (data_train[3]).T
    X_train = (data_train[0:3]).T

    return X_train, Y_train, X_dev, Y_dev
