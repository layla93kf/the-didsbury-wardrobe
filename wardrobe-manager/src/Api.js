import axios from 'axios';

export const postItem = (item, category) => {
  console.log('api', item);
  console.log('api', category);
  let path = `https://the-didsbury-wardrobe-3.onrender.com/api/clothing/${category}`;
  return axios
    .post(path, item)
    .then((response) => {
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
      return response;
    })
    .catch((err) => {
      return err;
    });
};
