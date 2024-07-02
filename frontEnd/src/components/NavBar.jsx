import useMediaQuery from '../hooks/useMediaQuery';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

import { Link } from 'react-router-dom';

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const closeMenu = () => {
    setIsMenuToggled(false);
  };
  if (isAboveMediumScreens) {
    return (
      <div className="bg-stone-100 w-full left-0 z-30 shadow">
        <div className="md:flex justify-center">
          <div className="text-l font-semibold font-roboto flex space-x-6">
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/dresses"> Dresses </Link>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/jumpsuits"> Jumpsuits </Link>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/tops">Tops </Link>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/jackets"> Jackets & Blazers </Link>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/skirts"> Skirts </Link>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <Link to="/api/clothing/accessories"> Accessories </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <button
          className="rounded-full bg-secondary-500 p-2 mt-24 ml-4 absolute z-50 left-0"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <Bars3Icon className="h-8 w-8 text-black" />
        </button>
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed left-0 top-0 z-50 h-full w-full bg-zinc-100 drop-shadow-xl">
            <div className="flex justify-between p-4 mt-10">
              <button onClick={closeMenu}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="mt-10 ml-4">
              <p className="text-xl mb-3">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-base">
                <Link
                  to="/api/clothing/dresses"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Dresses
                </Link>
                <Link
                  to="/api/clothing/jumpsuits"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Jumpsuits
                </Link>
                <Link
                  to="/api/clothing/tops"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Tops
                </Link>
                <Link
                  to="/api/clothing/jackets"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Jackets & Blazers
                </Link>
                <Link
                  to="/api/clothing/skirts"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Skirts
                </Link>
                <Link
                  to="/api/clothing/accessories"
                  className="border-b pb-1 text-xl mt-2"
                  onClick={closeMenu}
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default NavBar;
