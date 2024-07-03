const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#242424] text-white p-4 border-t-2 border-[#666666]">
      <ul className="flex justify-around">
        <li>
          <a href="/" className="hover:text-gray-400">
            Discover
          </a>
        </li>
        <li>
          <a href="/tickets" className="hover:text-gray-400">
            Tickets
          </a>
        </li>
        <li>
          <a href="/theaters" className="hover:text-gray-400">
            Theaters
          </a>
        </li>
        <li>
          <a href="/account" className="hover:text-gray-400">
            Account
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
