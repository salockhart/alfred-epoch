'use strict';
const alfy = require('alfy');
const moment = require('moment');

let date;

if (isNaN(alfy.input)) {
	date = new Date(alfy.input);
} else {
	date = new Date(0);
	date.setUTCSeconds(alfy.input.slice(0, 10));
}

const dateString = moment(date).format('LLL');
const secondsString = String(moment(date).unix());
const millisecondsString = String(moment(date).valueOf());

alfy.output([
	{
		title: dateString,
		subtitle: 'Date',
		arg: dateString
	}, {
		title: secondsString,
		subtitle: 'Timestamp (s)',
		arg: secondsString
	}, {
		title: millisecondsString,
		subtitle: 'Timestamp (ms)',
		arg: millisecondsString
	}
]);
