/**
 * Formats large numbers with k,m,b
 * @param {Number} n
 * @returns
 */
export const formatCash = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "m";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "b";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

/**
 * Truncates text with ellipsis
 * @param {String} text
 * @param {Number} maxLength
 * @returns
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};
