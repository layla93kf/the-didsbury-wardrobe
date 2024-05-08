const prodData = require('../data/prod-data/clothing.js')
const seed = require('./seed.js')
const db = require('../connection.js')

const runSeed = () => {
  return seed(prodData).then(() => db.end())
}

runSeed()
