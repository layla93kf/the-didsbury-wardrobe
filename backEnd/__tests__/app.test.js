const { app } = require('../app.js')
const request = require('supertest')
const db = require('../db/connection.js')
const seed = require('../db/seeds/seed.js')
const data = require('../db/data/dev-data/clothing.js')

beforeEach(() => {
  return seed(data)
})

afterAll(() => {
  db.end()
})

describe('GET /api/clothing/:category', () => {
  it('returns status code 200 with clothing data depending on category', () => {
    return request(app)
      .get('/api/clothing/dresses')
      .expect(200)
      .then(({ body }) => {
        const requiredKeys = [
          'clothing_id',
          'name',
          'origin',
          'size',
          'category',
          'price',
          'photos',
        ]
        body.data.forEach((item) => {
          expect(Object.getOwnPropertyNames(item)).toEqual(requiredKeys)
        })
      })
  })

  describe('GET /api/items/:clothing_id', () => {
    it('returns status code 200 with clothing data for a specific clothing ID', () => {
      return request(app)
        .get('/api/items/2') // Assuming the clothing_id is 2
        .expect(200)
        .then(({ body }) => {
          const expectedItem = {
            clothing_id: 2,
            name: 'Black and Gold &other stories',
            origin: '& other stories',
            size: '8',
            category: 'dresses',
            price: 'RENT FROM £20',
            photos:
              'https://www.canva.com/design/DAF_m765VR4/ya8lZkqNyyZbIkRxgT7Ffg/view?embed',
          }
          const receivedItem = body.data[0]
          expect(receivedItem).toEqual(expectedItem)
        })
    })

    it('returns status code 404 for a non-existing clothing ID', () => {
      return request(app).get('/api/clothing/invalid_id').expect(404)
    })
  })
})
describe('GET /api/home/top-picks', () => {
  it('returns status code 200 with random clothing data', () => {
    return request(app)
      .get('/api/home/top-picks')
      .expect(200)
      .then(({ body }) => {
        // Assuming body.data is an array of random items
        expect(Array.isArray(body.data)).toBe(true)
        expect(body.data.length).toBeGreaterThan(0)

        // Assuming each item in body.data has a structure similar to expectedItem
        const expectedItemKeys = [
          'clothing_id',
          'name',
          'origin',
          'size',
          'category',
          'price',
          'photos',
        ]
        const receivedItemKeys = Object.keys(body.data[0])
        expect(receivedItemKeys).toEqual(
          expect.arrayContaining(expectedItemKeys),
        )
      })
  })
})
