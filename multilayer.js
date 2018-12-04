const synaptic = require('synaptic');
const exporter = require('./exporter.js');

var A = require('./res/A.json')
var B = require('./res/B.json')
var C = require('./res/C.json')

var A50 = A.slice(0, 50);
var B50 = B.slice(0, 50);
var C50 = C.slice(0, 50);

var trainingSet = A50.concat(B50, C50);

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;
const Architect = synaptic.Architect;

const myNetwork = new Architect.Perceptron(625, 16, 16, 3);

var trainer = new Trainer(myNetwork)

trainer.train(trainingSet,{
	rate: .1,
	iterations: 2000,
	error: .0005,
	cost: Trainer.cost.MSE,
	schedule: {
		every: 1,
		do: function(data) {
			console.log("iterasi:", data.iterations, "error:", data.error);
		}
	}
});

var cobaA = myNetwork.activate(A[65].input)
var cobaB = myNetwork.activate(B[75].input)
var cobaC = myNetwork.activate(C[80].input)

console.log("A :")
console.log("coba A", cobaA)
console.log("harusnya hasilnya", A[65].output)

console.log("B :")
console.log("coba B", cobaB)
console.log("harusnya hasilnya", B[75].output)

console.log("C :")
console.log("coba C", cobaC)
console.log("harusnya hasilnya", C[80].output)

var exported = myNetwork.toJSON();
exporter('okjon', exported);

