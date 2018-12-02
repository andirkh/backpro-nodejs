const synaptic = require('synaptic');
const Network = synaptic.Network;

var A = require('./res/A.json')

var datakecilexport = require('./export-network-datakecil.json');

var myNetwork = Network.fromJSON(datakecilexport);


var cobaA = myNetwork.activate(A[15].input)
console.log("A :")
console.log("coba A", cobaA)
console.log("harusnya hasilnya", A[15].output)
