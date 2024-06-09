import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
import sys


class NeuralNetz:
    def __init__(self, alpha, iterations):
        self.w1 = np.random.rand(2, 30) - 0.5
        self.b1 = np.random.rand(2, 1) - 0.5
        # self.w1 = np.random.randn() - 0.5
        # self.b1 = 2  # np.random.randn() - 0.5
        self.alpha = alpha
        self.iterations = iterations

    def ReLU(self, Z):
        return np.maximum(Z, 0)

    def update_parameters(self, w1, b1, dw1, db1):
        w1 = w1 - (dw1 * self.alpha)
        b1 = b1
        return w1, b1

    def get_accuracy(self, predictions, Y):
        # print(predictions, Y)
        ac = np.sum(predictions == Y) / Y.size
        print(ac)
        return ac

    def forward_propagate(self, X, Y, w1, b1):
        score = (X * w1) + b1
        a1 = self.ReLU(score)
        return score, a1

    def backward_propagate(self, score, a1, w1, b1, X, Y):
        # find how far from value our val deviated
        dw1 = 1 / Y.size * np.sum(score - Y)
        db1 = b1
        return dw1, db1

    def train(self, X, Y, alpha, iteration):
        w1 = self.w1
        b1 = self.b1
        for i in range(iteration):
            score, a1 = self.forward_propagate(X, Y, w1, b1)
            dw1, db1 = self.backward_propagate(score, a1, w1, b1, X, Y)
            w1, b1 = self.update_parameters(w1, b1, dw1, db1)
            if i % 10 == 0:
                print("Iteration: ", i)
                # predictions = self.get_predictions(a1)
                print(self.get_accuracy(a1, Y))
        print(score)
        sys.exit()


# generate sample data
input_data = []
output_data = []
for i in range(30):
    inputI = i + 20
    input_data.append(inputI)
    output_data.append((inputI * 3) + 2)

X = np.array(input_data)
Y = np.array(output_data)

w1, b1 = (NeuralNetz(0.10, 300)).train(X, Y, 0.10, 500)
