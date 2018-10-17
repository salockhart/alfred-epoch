import test from 'ava';
import alfyTest from 'alfy-test';

test('should convert given UTC timestamp in seconds', async t => {
	const alfy = alfyTest();
	const result = await alfy('1539784980');

	t.deepEqual(result, [
		{
			title: 'October 17, 2018 3:03 PM',
			subtitle: 'Date',
			arg: 'October 17, 2018 3:03 PM'
		}, {
			title: '1539784980',
			subtitle: 'Timestamp (s)',
			arg: '1539784980'
		}, {
			title: '1539784980000',
			subtitle: 'Timestamp (ms)',
			arg: '1539784980000'
		}
	]);
});

test('should convert given US-style date string', async t => {
	const alfy = alfyTest();
	const result = await alfy('Oct 17 2018 3:03 PM');

	t.deepEqual(result, [
		{
			title: 'October 17, 2018 3:03 PM',
			subtitle: 'Date',
			arg: 'October 17, 2018 3:03 PM'
		}, {
			title: '1539784980',
			subtitle: 'Timestamp (s)',
			arg: '1539784980'
		}, {
			title: '1539784980000',
			subtitle: 'Timestamp (ms)',
			arg: '1539784980000'
		}
	]);
});

test('should convert given UK-style date string', async t => {
	const alfy = alfyTest();
	const result = await alfy('17 Oct 2018 3:03 PM');

	t.deepEqual(result, [
		{
			title: 'October 17, 2018 3:03 PM',
			subtitle: 'Date',
			arg: 'October 17, 2018 3:03 PM'
		}, {
			title: '1539784980',
			subtitle: 'Timestamp (s)',
			arg: '1539784980'
		}, {
			title: '1539784980000',
			subtitle: 'Timestamp (ms)',
			arg: '1539784980000'
		}
	]);
});
