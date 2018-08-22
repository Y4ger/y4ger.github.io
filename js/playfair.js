/* jshint esversion: 6 */

const cells = document.querySelectorAll('.cell');
const input = document.querySelector('#key');

const noRepeat = (k) => {
	var key = '';
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
	const key = noRepeat(rawKey);
	var pos = 0;
	cells.forEach((cell) => {
		cell.innerHTML = key[pos];
		pos++;
	});
};