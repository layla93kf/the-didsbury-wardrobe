import { getItemsByCategory } from '../Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FilterBySize from './FilterBySize';
import OverlayClickableIframe from './clickableOverlay';

export default function ItemList({ isLoading, setIsLoading }) {
  const [itemList, setItemList] = useState([]);
  const { category } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setIsLoading(true);
    getItemsByCategory(category)
      .then((response) => {
        setItemList(response.data);
        setSelectedSize(null);
        setCurrentPage(1);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error('Error fetching items:', err);
      });
  }, [category, setIsLoading]);

  const capitalisedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Ensure currentPage defaults to 1 if there aren't enough items for other pages
  useEffect(() => {
    if (
      itemList.length > 0 &&
      currentPage > Math.ceil(itemList.length / itemsPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [itemList, currentPage, itemsPerPage]);

  // Filter items by size
  let filteredItems = itemList;

  if (selectedSize) {
    filteredItems = itemList.filter(
      (item) => `UK ${item.size}` === selectedSize,
    );
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <div role="status">
        {/*Spinner*/}
        <svg
          aria-hidden="true"
          className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="item">
      <div className="bg-stone-100 text-center h-100 pt-12 pb-10">
        <div>
          {category.toLowerCase() === 'skirts' ? (
            <h2 className="text-3xl mb-2">Rent Women's Skirts & Trousers</h2>
          ) : (
            <h2 className="text-3xl mb-2">
              Rent Women's {capitalisedCategory}
            </h2>
          )}
        </div>
        <h3 className="text-lg ml-4 mr-4">
          Discover the latest rental pieces from top brands and labels at The
          Didsbury Wardrobe.
        </h3>
      </div>
      <div className="flex justify-center mt-8" style={{ width: '100%' }}>
        <FilterBySize setSelectedSize={setSelectedSize} />
      </div>
      <ul className="items">
        <div className="grid grid-cols-2 mb-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 md:gap-6">
          {currentItems.map((item) => (
            <li className="item mb-5 md:p-4 mt-6" key={item.clothing_id}>
              <Link
                to={`/api/items/${item.clothing_id}`}
                key={item.clothing_id}
                className="block"
              >
                <div
                  style={{
                    position: 'relative',
                    width: '90%',
                    height: 320,
                    paddingBottom: '40%',
                    marginLeft: 10,
                    boxShadow: '1px 1px 1px 1px rgba(63,69,81,0.16)',
                    overflow: 'hidden',
                    keepAlive: true,
                  }}
                >
                  <OverlayClickableIframe
                    src={item.photos}
                    clothingId={item.clothing_id}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 10,
                      overflow: 'hidden',
                      keepAlive: true,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                      zIndex: 20,
                    }}
                  >
                    <h2 className="font-semibold font-work-sans text-l uppercase mt-12">
                      {item.origin}
                    </h2>
                    <h5 className="text-sm font-work-sans mt-1">
                      {item.price}
                    </h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>

      {/* Pagination buttons */}
      {filteredItems.length > itemsPerPage && (
        <div className="flex justify-center mt-4 mb-20">
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              {[...Array(Math.ceil(filteredItems.length / itemsPerPage))].map(
                (_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      className={`${
                        currentPage === index + 1
                          ? 'bg-zinc-500 text-white'
                          : 'bg-zinc-100 text-black'
                      } font-semibold py-2 px-4 border-2 border-zinc-200 hover:bg-zinc-800 hover:text-white`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
