import useMediaQuery from '../hooks/useMediaQuery'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  if (isAboveMediumScreens) {
    return (
      <div className="bg-stone-100  w-full left-0 h-45 ">
        <div className="md:flex py-4 justify-center">
          <div className="font-semibold text-xl font-roboto flex space-x-6">
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <li className="list-none mt-48">
                <Link to="/api/clothing/dresses"> Dresses </Link>
              </li>
            </div>
            <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
              <li className="list-none mt-48">
                <Link to="/api/clothing/jumpsuits"> Jumpsuits </Link>
              </li>
            </div>
          </div>
          <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
            <li className="list-none mt-48">
              <Link to="/api/clothing/jackets"> Jackets & Blazers </Link>
            </li>
          </div>
          <div className="px-4 py-2 text-gray-800 hover:text-gray-900">
            <li className="list-none mt-48">
              <Link to="/api/clothing/skirts"> Skirts </Link>
            </li>
          </div>
        </div>
      </div>
    )
  } else if (!isAboveMediumScreens && isMenuToggled) {
    return (
      <div className="fixed left-0 bottom-0 z-40 h-full w-[200px] bg-primary-100 drop-shadow-xl bg-white">
        <div className="flex justify-between p-4 mt-48">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400 ml-[10%]" />
          </button>
        </div>
        <div className="ml-[10%] flex flex-col gap-2 text-base">
          {' '}
          {/* Adjust font size */}
          <p className="border-b pb-1">Dresses</p>{' '}
          {/* Add a line between each option */}
          <p className="border-b pb-1">Jumpsuits</p>{' '}
          {/* Add a line between each option */}
          <p className="border-b pb-1">Jackets & Blazers</p>{' '}
          {/* Add a line between each option */}
          <p>Skirts</p>
        </div>
      </div>
    )
  } else {
    return (
      <button
        className="rounded-full bg-secondary-500 p-2 mt-48"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <Bars3Icon className="h-10 w-10 text-black " />
      </button>
    )
  }
}

export default NavBar
