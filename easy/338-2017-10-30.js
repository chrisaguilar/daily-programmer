function zellersCongruence(date) {
    // https://en.wikipedia.org/wiki/Zeller%27s_congruence#Implementation_in_software

    const { floor } = Math;

    const m = date[1] < 3 ? date[1] + 12 : date[1];
    const d = date[2];
    const _y = date[1] < 3 ? date[0] - 1 : date[0];
    const y = _y % 100;
    const c = Math.floor(_y / 100);

    return (d + floor(13 * (m + 1) / 5) + y + floor(y / 4) + floor(c / 4) + 5 * c) % 7;
}

const daysOfWeek = [ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const inputs = [
    '2017 10 30',
    '2016 2 29',
    '2015 2 28',
    '29 4 12',
    '570 11 30',
    '1066 9 25',
    '1776 7 4',
    '1933 1 30',
    '1953 3 6',
    '2100 1 9',
    '2202 12 15',
    '7032 3 26',
    '1996 12 26',
    '2000 1 1',
    '2000 3 1',
    '2006 8 12',
    '1979 8 28',
    '1999 3 9',
    '1996 1 4',
    '2016 10 31',
    '2018 8 12'
].map(e => e.split(' ').map(Number));

const outputs = inputs.map(zellersCongruence).map(e => daysOfWeek[e]);

inputs.forEach((e, i) => console.log(`${months[e[1] - 1]} ${e[2]}, ${e[0]} is a ${outputs[i]}`));
