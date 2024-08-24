import React, { useState } from 'react';

import { deleteItem, postItem } from '../Api';

export default function WardrobeManager() {
  const categories = [
    'dresses',
    'jackets',
    'tops',
    'skirts',
    'jumpsuits',
    'accessories',
  ];
  const sizes = [6, 8, 10, 12, 14, 16, 18];

  const [itemData, setItemData] = useState({
    name: '',
    origin: '',
    size: '',
    category: '',
    price: '',
    photos: '',
  });

  const [setItemAdded] = useState(false);

  const [itemAddedMsg, setItemAddedMsg] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'price') {
      setItemData({
        ...itemData,
        [name]: `RENT FROM £${value.replace(/RENT FROM £/, '')}`,
      });
    } else {
      setItemData({
        ...itemData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = itemData.category;
    setItemAddedMsg('');

    postItem(itemData, category).then((response) => {
      setItemAdded(true);
      setItemAddedMsg(
        `The item ${itemData.name} by ${itemData.origin} has been added.`,
      );
      console.log(response);
      console.log('Item added successfully:', response.data);
      setItemData({
        name: '',
        origin: '',
        size: '',
        category: '',
        price: '',
        photos: '',
      });
    });
  };

  const handleDelete = async (clothingId) => {
    try {
      deleteItem(clothingId).then((response) => {
        setDeleteMessage(
          `The item ${response.name} by ${response.origin} has been deleted`,
        );
      });
      console.log('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold font-open-sans text-zinc-700 mb-4 mt-11 text-center">
          Wardrobe Manager
        </h1>
        <h2 className="text-xl font-bold mt-8 mb-5">Add Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium mb-5">Name:</label>
            <input
              type="text"
              name="name"
              value={itemData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Origin:</label>
            <input
              type="text"
              name="origin"
              value={itemData.origin}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Size:</label>
            <select
              name="size"
              value={itemData.size}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            >
              <option value="">Select a size</option>{' '}
              {/* Default blank option */}
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Price:</label>
            <input
              type="text"
              name="price"
              placeholder="RENT FROM £"
              value={itemData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category:</label>
            <select
              name="category"
              value={itemData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            >
              {' '}
              <option value="">Select a category</option>{' '}
              {/* Default blank option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Photos:</label>
            <input
              type="text"
              name="photos"
              value={itemData.photos}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            />
          </div>
          <h5>{itemAddedMsg}</h5>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-zinc-600 text-white rounded-md"
          >
            Add Item
          </button>
        </form>

        <h2 className="text-xl font-bold mt-8">Delete Item</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const clothingId = e.target.elements.clothing_id.value;
            handleDelete(clothingId);
          }}
          className="space-y-4 mt-4"
        >
          <div>
            <label className="block text-sm font-medium">Clothing ID:</label>
            <input
              type="text"
              name="clothing_id"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border h-10"
            />
          </div>
          <h5>{deleteMessage}</h5>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md"
          >
            Delete Item
          </button>
        </form>
      </div>
    </>
  );
}
