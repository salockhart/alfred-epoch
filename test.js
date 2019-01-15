import test from 'ava';
import alfyTest from 'alfy-test';
import moment from 'moment';

const date = moment(new Date(new Date(0).setUTCSeconds(1539784980)));
const dateString = date.format('MMMM Do, Y LTS');
const seconds = String(date.unix());
const milliseconds = String(date.valueOf());

const expected = [
	{
		title: dateString,
		subtitle: 'Date',
		arg: dateString
	}, {
		title: seconds,
		subtitle: 'Timestamp (s)',
		arg: seconds
	}, {
		title: milliseconds,
		subtitle: 'Timestamp (ms)',
		arg: milliseconds
	}
];

test('should convert given UTC timestamp in seconds', async t => {
	const alfy = alfyTest();
	const result = await alfy('1539784980');

	t.deepEqual(result, expected);
});

test('should convert given UTC timestamp in milliseconds', async t => {
	const alfy = alfyTest();
	const result = await alfy('1539784980000');

	t.deepEqual(result, expected);
});

test('should convert given US-style date string', async t => {
	const alfy = alfyTest();
	const result = await alfy('Oct 17 2018 2:03 PM UTC');

	t.deepEqual(result, expected);
});

test('should convert given UK-style date string', async t => {
	const alfy = alfyTest();
	const result = await alfy('17 Oct 2018 2:03 PM UTC');

	t.deepEqual(result, expected);
});
