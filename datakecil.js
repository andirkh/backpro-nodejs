//const fs = require('fs');
const synaptic = require('synaptic');

var trainingSet = require('./res/campur.json');

var A = require('./res/A.json')
var B = require('./res/B.json')
var C = require('./res/C.json')

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
var cobaA = myNetwork.activate(A[15].input)
var cobaB = myNetwork.activate(B[37].input)
var cobaC = myNetwork.activate(C[80].input)

console.log("A :")
console.log("coba A", cobaA)
console.log("harusnya hasilnya", A[15].output)

console.log("B :")
console.log("coba B", cobaB)
console.log("harusnya hasilnya", B[15].output)

console.log("C :")
console.log("coba C", cobaC)
console.log("harusnya hasilnya", C[15].output)

//var exported = myNetwork.toJSON();

//fs.writeFile("./export-datakecil.json", JSON.stringify(exported), function(err) {
//if(err) {
//    return console.log(err);
//}

//console.log("The file was saved!");
//});
