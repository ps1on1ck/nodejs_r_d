const isNumeric = function(val) {
    return /^-?\d+$/.test(val);
};

module.exports = { isNumeric };
