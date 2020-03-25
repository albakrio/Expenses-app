import moment from 'moment';
export default [
	{
		id: "1",
		description: 'rent',
		amount: 10095,
		createdAt: 0,
		note: ''
	},
	{
		id: "2",
		description: 'Credit Card',
		amount: 100,
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf(),
		note: ''
	},

	{
		id: "3",
		description: 'bill',
		amount: 200,
		createdAt: moment(0)
			.add(4, 'days')
			.valueOf(),
		note: ''
	}
];
