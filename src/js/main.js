'use strict';

alert(2);
(function() {
	console.log('hello');
})();


let $ = require('jquery');

alert(1);

$(window).on('ready', () => {
	window.addEventListener('deviceorientation', function(e) {
		let absolute = e.absolute;
		let alpha    = e.alpha;
		let beta     = e.beta;
		let gamma    = e.gamma;

		console.log('absolute', absolute);
		console.log('alpha', alpha);
		console.log('beta', beta);
		console.log('gamma', gamma);

	}, true);
});



