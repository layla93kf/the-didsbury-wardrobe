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
      <div className="bg-stone-100  w-full left-0 z-30 fixed-top shadow">
        <div className="md:flex justify-center">
          <div className="text-l font-semibold font-roboto flex space-x-6">
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900 ">
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
  } else if (!isAboveMediumScreens && isMenuToggled) {
    return (
      <div className="fixed left-0 bottom-0 z-50 h-full w-[200px] bg-primary-100 drop-shadow-xl bg-zinc-100">
        <div className="flex justify-between p-4 mt-10">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400 ml-[10%]" />
          </button>
        </div>
        <div>
          <p className="text-xl ml-5 mb-3">CATEGORIES</p>
        </div>
        <div className="ml-[10%] flex flex-col gap-2 text-base">
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
    );
  } else {
    return (
      <button
        className="rounded-full bg-secondary-500 p-2 mt-4"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <Bars3Icon className="h-8 w-8 text-black ml-4" />
      </button>
    );
  }
};

export default NavBar;
