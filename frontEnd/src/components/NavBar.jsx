const NavBar = () => {
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
};

export default NavBar;
