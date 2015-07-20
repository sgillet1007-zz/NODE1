var lightOrNot = 0;

var inputR = process.argv[2];
var inputG = process.argv[3];
var inputB = process.argv[4];

var output = (0.2126*inputR)+(0.7152*inputG)+(0.0722*inputB);

if (output < 155) {
	console.log("dark");
}
else {
	console.log("light");
}
