'use strict';

alert(2);

(function() {
	console.log('hello');
})();

alert(1);

window.addEventListener('deviceorientation', function(e) {
	var absolute = e.absolute;
	var alpha    = e.alpha;
	var beta     = e.beta;
	var gamma    = e.gamma;

	console.log('absolute', absolute);
	console.log('alpha', alpha);
	console.log('beta', beta);
	console.log('gamma', gamma);

}, true);
