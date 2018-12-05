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
epoch = 5000
# inisialisasi weight random dari -1 ke 1 :
inputShape = inputDataset.shape    # tuple baris, kolom
outputShape = outputDataset.shape
weight1 = 2 * np.random.random((inputShape[1], inputShape[0])) - 1 
weight2 = 2 * np.random.random((outputShape[0], 1)) - 1

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
    # propagate
    outputError = outputDataset - outputLayer
    delta2 = outputError * sigmoid(outputLayer, True)
    
    #print(delta2.shape)
    #print(weight2.T.shape)
    print ("Error:" + str(np.mean(np.abs(outputError))))
    
    hiddenError = delta2.T.dot(weight2)
    delta1 = hiddenError * sigmoid(hiddenLayer, True)
    
    print(hiddenLayer.shape)
    print(delta2.shape)
    #hiddenLayer.dot(delta2)
    #weight1 += hidden.dot(hiddenLayer)
    #weight2 += delta1.T.dot(inputLayer)
    
