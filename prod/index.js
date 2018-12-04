const synaptic = require('synaptic');
const Network = synaptic.Network;

var A = require('../res/A.json');
var filepath = '../exported_network/export-multilayer.json';

var importir = require(filepath);
var myNetwork = Network.fromJSON(importir);

var cobaA = myNetwork.activate(A[15].input)

console.log("A :")
console.log("coba A", cobaA)
console.log("harusnya hasilnya", A[15].output)
console.log("jadi,")

var printer = function(num){
	var percent = cobaA[num] * 100
	var percentString = percent.toString().substring(0, 5);
	return percentString + "%";
}

var hasil = "kemungkinan hasilnya " + printer(0) + " huruf A, " + printer(1) + " huruf B, " + printer(2) + " huruf C";
console.log(hasil)
