const axios = require("axios");

export const getItemsByCategory = (category) => {
  let path = "";
  if (category) {
    path += `/${category}`;
    return axios.get(path).then((response) => {
      return response.data;
    });
  }
};
