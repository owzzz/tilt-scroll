'use strict';

/* Main Class
 *************/

class Main {
	constructor () {

	}
	bindEvents () {
		window.addEventListener('deviceorientation', function(e) {
			let absolute = e.absolute;
			let alpha = e.alpha;
			let beta = e.beta;
			let gamma = e.gamma;
			console.log('absolute', absolute);
			console.log('alpha', alpha);
			console.log('beta', beta);
			console.log('gamma', gamma);
		}, true);
	}
}

console.log('im here');
