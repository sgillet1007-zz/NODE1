var luminosity = function(inputR,inputG,inputB){
	// var output = (0.2126*inputR)+(0.7152*inputG)+(0.0722*inputB);
	// return output;
	return (0.2126*process.argv[2])+(0.7152*process.argv[3])+(0.0722*process.argv[4]);
};

module.exports = {
	'luminosity': output,
};

console.log(output);
