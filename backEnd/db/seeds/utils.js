const formattingPhotos = (clothingData) => {
  // Iterate over each item in clothingData and format its photos array
  const formattedData = clothingData.map((item) => ({
    ...item, // Keep other properties unchanged
    photos: `{${item.photos.map((photo) => `"${photo}"`).join(",")}}`, // Format photos array
  }));

  return formattedData;
};

const { clothingData } = require("../data/dev-data");

// Call the formattingPhotos function
const formattedClothingData = formattingPhotos(clothingData);

module.exports = formattedClothingData;
