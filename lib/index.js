"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankersRound = void 0;
var bankersRound = function (num, decimalPlaces) {
    if (decimalPlaces === void 0) { decimalPlaces = 0; }
    var d = decimalPlaces;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
    var i = Math.floor(n);
    var f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ? (i + (i % 2)) : Math.round(n);
    return d ? r / m : r;
};
exports.bankersRound = bankersRound;
exports.default = exports.bankersRound;
//# sourceMappingURL=index.js.map