import { useState } from 'react';

export default function FilterBySize({ setSelectedSize }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const sizes = ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'UK 18'];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setDropdownVisible(false);
  };

  return (
    <div className=" inline-block text-left">
      <button
        onClick={() => setDropdownVisible(!isDropdownVisible)}
        className="border-2 mb-4 bg-zinc-100 text-black p-4 px-24 hover:bg-zinc-800 hover:text-white rounded w-full"
      >
        FILTER BY SIZE
      </button>
      {isDropdownVisible && (
        <div className="absolute mt-1 w-60 text-xl bg-zinc-100 z-50">
          {sizes.map((size) => (
            <div
              key={size}
              onClick={() => handleSizeClick(size)}
              className="cursor-pointer p-2 hover:bg-gray-300"
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
