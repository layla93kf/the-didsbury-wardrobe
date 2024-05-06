import axios from "axios";

export const getItemsByCategory = (category) => {
  let path = "https://the-didsbury-wardrobe-3.onrender.com/api/clothing";
  if (category) {
    path += `/${category}`;
    console.log(path);
    return axios.get(path).then((response) => {
      return response.data;
    });
  }
};
