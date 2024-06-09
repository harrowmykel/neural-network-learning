from data import get_data
import numpy as np
import math
import sys


class NeuralNetwork:
    def __init__(self, n_inputs, n_neurons, learning_rate) -> None:
        self.learning_rate = learning_rate

    def train(self, X_data, Y_data, iterations):
        # quickly generate the weights
        self.weights = np.random.rand(3, 1) - 0.5
        self.biases = np.random.rand(30, 1) - 0.5

        for i in range(iterations):
            Z1, A1 = self.forwardProp(X_data)
            dWeight, dBias = self.backwardPropagate(A1, Y_data)
            self.updateParams(dWeight, dBias)

            if (i % 10) == 0:
                print("round ", i)
                print("acc: ", self.checkAccuracy(A1, Y_data))

    def checkAccuracy(self, predictions, Y):
        correctItems = 0
        totalItems = 0
        indexL = 0
        for l in Y:
            indexM = 0
            for m in l:
                pred = predictions[indexL][indexM]
                totalItems += 1
                if ((m + 0.023) >= pred) and (m - 0.023) <= pred:
                    correctItems += 1

        return correctItems / totalItems
        # return np.sum(predictions == Y) / Y[0].size

    def forwardProp(self, X_data):
        Z1 = np.dot(X_data, self.weights) + self.biases
        A1 = self.ReLU(Z1)
        return Z1, A1

    def backwardPropagate(self, A1, Y):
        dW = np.sqrt((A1 - Y) ** 2) / (Y[0].size)
        dB = ((A1 - Y)) / (Y[0].size)
        return dW, dB

    def updateParams(self, dW, dB):
        print(self.weights.shape, self.learning_rate, dW.shape)
        sys.exit()
        self.weights = self.weights - (self.learning_rate * dW)
        self.biases = self.biases - (self.learning_rate * dB)

    def ReLU(self, Z1):
        return np.maximum(0, Z1)


X_train, Y_train, X_dev, Y_dev = get_data(9)
n_inputs, n_neurons = X_train.shape
# 30x3
# 30x1
(NeuralNetwork(n_inputs, n_neurons, 0.1)).train(X_train, Y_train.reshape((30, 1)), 100)
