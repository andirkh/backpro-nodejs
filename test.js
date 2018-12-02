const synaptic = require('synaptic');

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;
const Neuron = synaptic.Neuron;

var inputLayer = new Layer(625);
var hiddenLayer = new Layer(300);
var outputLayer = new Layer(3);

inputLayer.set({
	squash: Neuron.squash.TANH,
	bias: 0
})

console.log("inputLayer", inputLayer);
