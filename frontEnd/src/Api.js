import axios from 'axios';

export const getItemsByCategory = (category) => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api/clothing';
  if (category) {
    path += `/${category}`;

    return axios.get(path).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
};

export const getItemById = (clothingId) => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api';
  if (clothingId) {
    path += `/items/${clothingId}`;

    return axios.get(path).then((response) => {
      return response.data;
    });
  }
};

export const getRandomItems = () => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api/home/top-picks';

  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, 'error');
    });
};

export const postItem = (item, category) => {
  console.log('api', item);
  console.log('api', category);
  let path = `https://the-didsbury-wardrobe-3.onrender.com/api/clothing/${category}`;
  return axios
    .post(path, item)
    .then((response) => {
      console.log(response, 'HERE');
      return response;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteItem = (clothing_id) => {
  let path = `https://the-didsbury-wardrobe-3.onrender.com/api/items/${clothing_id}`;

  return axios
    .delete(path)
    .then((response) => {
      console.log(response, 'API RES');
      return response.data.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const sendRequestForm = (formData) => {
  let path = 'https://the-didsbury-wardrobe-3.onrender.com/api/emailRequest';
  return axios
    .post(path, formData)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err;
    });
};
