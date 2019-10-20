export const bankersRound = (num: number, decimalPlaces: number = 0): number => {
    const d = decimalPlaces;
    const m = 10 ** d;
    const n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8; // Allow for rounding errors in f
    const r = (f > 0.5 - e && f < 0.5 + e) ? (i + (i % 2)) : Math.round(n);
    return d ? r / m : r;
  };
  export default bankersRound;