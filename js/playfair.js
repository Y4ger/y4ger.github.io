/* jshint esversion: 6 */

const cells = document.querySelectorAll('.cell');
const input = document.querySelector('#key');
const message = document.querySelector('#message');
const encodedResponse = document.querySelector('.encoded-message');

var key = '';


const noRepeat = (k) => {
	while (k.length > 0) {
		var rm = new RegExp(k[0], 'g');
		key += k[0];
		k = k.replace(rm, '');
	}
	return key;
};

const setKey = () => {
	//Remove all whitespace and replace all J with I (by the design of playfair)
	var rawKey = input.value.toLowerCase().replace(/ +/g, "").replace(/j/g, "i");

	const alph = 'abcdefghiklmnopqrstuvwxyz';
	rawKey = rawKey.concat(alph);
	key = noRepeat(rawKey);
	var pos = 0;
	cells.forEach((cell) => {
		cell.innerHTML = key[pos];
		pos++;
	});
};

const encode = () => {
	//convert message using playfair key
	var rawMessage = message.value.toLowerCase().replace(/ +/g, "").replace(/j/g, "i");
	//if message.length is not even add an 'x' to the end (by the design of playfair)
	if (rawMessage.length % 2 == 1) {
		rawMessage = rawMessage.concat('x');
	}

	var encoded = '';
	const findRow = (pos) => {
		if (pos < 5) {
			return 0;
		} else if (pos > 4 && pos < 10) {
			return 1;
		} else if (pos > 9 && pos < 15) {
			return 2;
		} else if (pos > 14 && pos < 20) {
			return 3;
		} else {
			return 4;
		}
	};

	for (var i = 0; i < rawMessage.length; i += 2) {

		var firstLetter = rawMessage[i],
			secondLetter = rawMessage[i + 1],
			firstPos = key.indexOf(firstLetter),
			secondPos = key.indexOf(secondLetter);

		if (firstPos == secondPos) {
			secondPos = key.indexOf('x');
		}

		var firstRow = findRow(firstPos),
			secondRow = findRow(secondPos),
			rowDiff = Math.abs(firstRow - secondRow),
			posDiff = firstPos - secondPos,
			posDiffAbs = Math.abs(posDiff);

		//same row?
		if (firstRow == secondRow) {
			switch (firstPos) {
				case 4:
					encoded += key[0];
					break;
				case 9:
					encoded += key[5];
					break;
				case 14:
					encoded += key[10];
					break;
				case 19:
					encoded += key[15];
					break;
				case 24:
					encoded += key[20];
					break;
				default:
					encoded += key[firstPos + 1];
			}
			switch (secondPos) {
				case 4:
					encoded += key[0];
					break;
				case 9:
					encoded += key[5];
					break;
				case 14:
					encoded += key[10];
					break;
				case 19:
					encoded += key[15];
					break;
				case 24:
					encoded += key[20];
					break;
				default:
					encoded += key[secondPos + 1];
			}
		}
		//same column?
		else if (posDiffAbs == 5 || posDiffAbs == 10 || posDiffAbs == 15 || posDiffAbs == 20) {
			switch (firstPos) {
				case 20:
					encoded += key[0];
					break;
				case 21:
					encoded += key[1];
					break;
				case 22:
					encoded += key[2];
					break;
				case 23:
					encoded += key[3];
					break;
				case 24:
					encoded += key[4];
					break;
				default:
					encoded += key[firstPos + 5];
			}
			switch (secondPos) {
				case 20:
					encoded += key[0];
					break;
				case 21:
					encoded += key[1];
					break;
				case 22:
					encoded += key[2];
					break;
				case 23:
					encoded += key[3];
					break;
				case 24:
					encoded += key[4];
					break;
				default:
					encoded += key[secondPos + 5];
			}
		}
		//first on top?
		else if (posDiff < 0) {

			encoded += key[secondPos - (rowDiff * 5)];
			encoded += key[firstPos + (rowDiff * 5)];
			console.log("top");
		}
		//first on bottom
		else if (posDiff > 0) {
			encoded += key[secondPos + (rowDiff * 5)];
			encoded += key[firstPos - (rowDiff * 5)];
			console.log('second top');
		}
		//replace repeating letters with x
		else {
			encoded += key[firstPos];
			encoded += key[firstPos];
			console.log('repeating letters');
		}
	}

	encodedResponse.innerHTML = encoded;
};