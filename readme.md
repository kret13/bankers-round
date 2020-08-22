Bankers round function to reduce the accumulated error. Module written in TS.

## Installation

	npm i bankers-round --save
	yarn add bankers-round


## Using

	// ES5
	var { bankersRound } = require('bankers-round');
	
	// ES6
	import { bankersRound } from 'bankers-round';

	bankersRound(4.5) //4
	bankersRound(5.5) //6
	bankersRound(0.045, 2) //0.04
	bankersRound(0.055, 2) //0.06
