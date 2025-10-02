function toUpper(str) { return str.toUpperCase(); }
function toLower(str) { return str.toLowerCase(); }
function length(str) { return str.length; }
function reverse(str) { return str.split('').reverse().join(''); }
function capitalize(str) {
  return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}
function contains(str, sub) { return str.includes(sub); }
function replaceAll(str, find, replace) {
    return str.split(find).join(replace);
}
function trim(str) { return str.trim(); }
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = {
    toUpper, toLower, length, reverse, capitalize, contains,
    replaceAll, trim, capitalizeWords, slugify, isPalindrome
};
