import json
import numpy as np

# input dataset :
with open('../res/campur.json') as f:
    data = json.load(f)

inputDataset = np.empty((0,625), int)
outputDataset = np.empty((0, 3), int)

for i in range(len(data)):
    inputDataset = np.append(inputDataset, np.array([data[i]["input"]]), axis=0)
    outputDataset = np.append(outputDataset, np.array([data[i]["output"]]), axis=0)

# iterasi:
epoch = 100000

# inisialisasi weight random dari -1 ke 1 :
inputShape = inputDataset.shape    # tuple baris, kolom
outputShape = outputDataset.shape
"""
print("inputShape")
print(inputShape)
print("outputShape")
print(outputShape)
"""
weight1 = 2 * np.random.random((inputShape[1], inputShape[0])) - 1 
weight2 = 2 * np.random.random((outputShape[0], 3)) - 1
"""
print("weight1")
print(weight1.shape)
print("weight2")
print(weight2.shape)
"""
def sigmoid(x, d):
    #d -> derivatif
    if d == True:
        return x * (1 - x)
    elif d == False:
        return 1/(1+np.exp(-x))
"""
inputLayer = inputDataset
hiddenLayer = sigmoid(np.dot(inputLayer, weight1), False)
outputLayer = sigmoid(np.dot(hiddenLayer, weight2), False)

print(hiddenLayer.shape)
print(weight2.shape)
"""

for j in range(epoch):
    # feed forward
    inputLayer = inputDataset
    hiddenLayer = sigmoid(np.dot(inputLayer, weight1), False)
    outputLayer = sigmoid(np.dot(hiddenLayer, weight2), False)
    """
    print("hiddenLayer")
    print(hiddenLayer.shape)
    print("outputLayer")
    print(outputLayer.shape)
    """
    # propagate
    outputError = outputDataset - outputLayer
    delta2 = outputError * sigmoid(outputLayer, True)
    """
    print("delta2")
    print(delta2.shape)
    """
    print ("Error:" + str(np.mean(np.abs(outputError))))
    
    hiddenError = delta2.dot(weight2.T)
    delta1 = hiddenError * sigmoid(hiddenLayer, True)
    """
    print("hiddenError")
    print(hiddenError.shape)
    print("delta1")
    print(delta1.shape)
    """
    weight2 += hiddenLayer.T.dot(delta2)
    weight1 += inputLayer.T.dot(delta1)
    
