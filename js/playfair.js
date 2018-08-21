/* jshint esversion: 6 */

const cells = document.querySelectorAll('.cell');
const key = document.querySelector('#key');

const recieveInput = () => {

	cells.forEach((cell) => {
		cell.innerHTML = key.value;
	});
};