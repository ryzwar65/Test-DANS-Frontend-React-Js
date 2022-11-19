const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(duration);
dayjs.extend(relativeTime);
exports.checkDate = (date) => {
	const parse = dayjs(date);
	const now = new dayjs();
	const diff = now.diff(parse, 'days', true);
	const pembulatan = Math.floor(diff);

	return dayjs.duration(pembulatan, 'days').humanize();
};
