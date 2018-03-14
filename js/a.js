console.log('before exports a.js');

var b = require('../c');

module.exports = function () {
	console.log('a.js');
};