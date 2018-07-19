const { LocalStorage } = require('node-localstorage')

let localStorage

const getLocalStorage = () => {
  if (typeof localStorage === 'undefined' || localStorage === null) {
    localStorage = new LocalStorage('./scratch')
  }
  return localStorage
}

module.exports = {
  getLocalStorage,
}
