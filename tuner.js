frequencies = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];

function tune(arr) {
	if (!Array.isArray(arr)) throw "Parameter should be an array";
	if (arr.length != 6) throw "Array must have 6 elements";
	return arr.map((x, i) => test(x, i));
}

function test(frequency, index) {
	if(frequency < 0) throw "Invalid frequency";
	if(frequency == 0) return " - ";
	if(frequency == frequencies[index]) return "OK";
	if(frequencies[index] < frequency < frequencies[index] * 1.03) return "•<";
	if(frequencies[index] > frequency > frequencies[index] * 0.97) return ">•";
	if(frequency >= frequencies[index] * 1.03) return ">>•";
	else return "•<<";
}
