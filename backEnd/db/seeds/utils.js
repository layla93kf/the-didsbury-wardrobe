const formattingPhotos = (clothingData) => {
  const formattedData = clothingData.map((item) => ({
    ...item, // Keep other properties unchanged
    photos: `{${item.photos.map((photo) => `"${photo}"`).join(",")}}`, // Format photos array
  }));

  return formattedData;
};

module.exports = { formattingPhotos };
