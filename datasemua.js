const synaptic = require('synaptic');

var A = require('./res/A.json')
var B = require('./res/B.json')
var C = require('./res/C.json')

var A99 = A.slice(0, 99);
var B99 = B.slice(0, 99);
var C99 = C.slice(0, 99);

var trainingSet = A99.concat(B99, C99);

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

const inputLayer = new Layer(625);
const hiddenLayer = new Layer(300);
const outputLayer = new Layer(3);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});


var trainer = new Trainer(myNetwork)

trainer.train(trainingSet,{
	rate: .1,
	iterations: 2000,
	error: .005,
	cost: Trainer.cost.CROSS_ENTROPY,
	schedule: {
		every: 1,
		do: function(data) {
			console.log("iterasi", data.iterations, "error", data.error);
		}
	}
});
//
//shuffle: true,
var cobaA = myNetwork.activate(A[99].input)
var cobaB = myNetwork.activate(B[99].input)
var cobaC = myNetwork.activate(C[99].input)

console.log("A :")
console.log("coba A", cobaA)
console.log("harusnya hasilnya", A[99].output)

console.log("B :")
console.log("coba B", cobaB)
console.log("harusnya hasilnya", B[99].output)

console.log("C :")
console.log("coba C", cobaC)
console.log("harusnya hasilnya", C[99].output)
