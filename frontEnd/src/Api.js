import axios from 'axios'

export const getItemsByCategory = (category) => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api/clothing'
  if (category) {
    path += `/${category}`

    return axios.get(path).then((response) => {
      return response.data
    })
  }
}

export const getItemById = (clothingId) => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api'
  if (clothingId) {
    path += `/items/${clothingId}`

    return axios.get(path).then((response) => {
      return response.data
    })
  }
}
