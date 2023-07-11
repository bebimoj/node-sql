const path = require('path');
const truncate = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  rootDir: path.dirname(require.main.filename),
  truncate: truncate,
  capitalize: capitalize
};
