import Link from "next/link";
// import Image from "next/image";

const NavBar: React.FC<{}> = () => {
  const handleClick = () => {
    const element = document.querySelector("#navContent");
    element.classList.toggle("block");
    element.classList.toggle("hidden");
  };

  return (
    <nav className="fixed w-screen bg-black lg:px-40 sm:px-10 px-2 sm:flex justify-between items-center border-b-1 border-gray-600 z-10">
      <div className="flex px-4 justify-between sm:py-0 pb-1">
        {/* <Link href=""> */}
        {/* <img src="/images/me.jpg" alt="Logo" className="h-12" /> */}
        {/* </Link> */}

        <button
          className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
          onClick={handleClick}
        >
          &#9776;
        </button>
      </div>

      <ul className="hidden sm:flex cursor-pointer" id="navContent">
        <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
          <Link href="#about">
            <p className="text-lg">About</p>
          </Link>
        </li>
        <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
          <Link href="#passion">
            <p className="text-lg">Passion</p>
          </Link>
        </li>
        <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
          <Link href="#experience">
            <p className="text-lg">Experience</p>
          </Link>
        </li>
        <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
          <Link href="#work">
            <p className="text-lg">Work</p>
          </Link>
        </li>
        <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
          <Link href="#contact">
            <p className="text-lg">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
