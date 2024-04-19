import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  if (isAboveMediumScreens) {
    return (
      <div className="bg-stone-100  w-full left-0">
        <div className="md:flex py-4 justify-center">
          <div className="font-semibold text-xl font-roboto flex space-x-6">
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              Dresses
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              Jumpsuits
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              Jackets & Blazers
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              Skirts
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!isAboveMediumScreens && isMenuToggled) {
    return (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-primary-100 drop-shadow-xl">
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <p>Dresses</p>
          <p>Jumpsuits</p>
          <p>Jackets & Blazers</p>
          <p>Skirts</p>
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="rounded-full bg-secondary-500 p-2"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <Bars3Icon className="h-10 w-10 text-black " />
      </button>
    );
  }
};

export default NavBar;
