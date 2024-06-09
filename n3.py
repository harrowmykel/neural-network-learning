from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
import sys
from data import get_data

X_train, Y_train, X_dev, Y_dev = get_data(9)

linear = LinearRegression()
linear.fit(X_train, Y_train)
prediction = linear.predict(X_dev)
print(X_dev, prediction)
sys.exit()
rr = linear.score(X_dev, Y_dev)
print(rr)


forest = RandomForestRegressor()
forest.fit(X_train, Y_train)
r = forest.score(X_dev, Y_dev)

print(r)
sys.exit()
