const fs = require('fs')

var exporter = function(net_name, net){
	filepath = "./exported_network/" + net_name + ".json";
	network_string = JSON.stringify(net);

	fs.writeFile(filepath, network_string, function(err) {
		if(err) {
		    return console.log(err);
		}
		console.log("The file was saved!");
	});
}

module.exports = exporter;
