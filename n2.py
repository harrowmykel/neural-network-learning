import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
import sys

import torch
import torch.nn as nn
import torch.optim as optim
from data import get_data


# Define the neural network model
class RegressionNN(nn.Module):
    def __init__(self, input_size=3, hidden_size=10, output_size=1):
        super(RegressionNN, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out


# Hyperparameters
input_size = 3
hidden_size = 10
output_size = 1
learning_rate = 0.001
num_epochs = 100


X_train, Y_train, X_dev, Y_dev = get_data(9)

# Sample data (n X 3)
# Replace this with your actual data
x_train = torch.from_numpy(X_train.T)  # Example input batch of size 100 X 3
y_train = torch.from_numpy(Y_train.T)  # Example output batch of size 100 X 1

# Model, loss function, and optimizer
model = RegressionNN(input_size, hidden_size, output_size)
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(num_epochs):
    # Forward pass
    outputs = model(x_train)
    loss = criterion(outputs, y_train)

    # Backward pass and optimization
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if (epoch + 1) % 10 == 0:
        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# Testing with a new batch
# Replace this with your actual test data
x_test = torch.from_numpy(X_dev.T)  # Example test batch of size 10 X 3
predictions = model(x_test)
print(predictions)
