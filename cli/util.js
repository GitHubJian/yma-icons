function covert(filename) {
    const filenamePairs = filename.split('-');

    const str = filenamePairs.reduce(function (prev, cur) {
        cur = cur.slice(0, 1).toUpperCase() + cur.slice(1);

        prev = prev + cur;

        return prev;
    }, '');

    return str;
}

exports.covert = covert;
