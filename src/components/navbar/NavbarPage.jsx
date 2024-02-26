import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import DarkMode from "./darkmode";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  img from '../../../public/logo.png'


const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropdownLink = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const NavbarPage = () => {
 

  const cartItems = useSelector((state) => state.cart)

  
  return (
    <div className=" fixed top-0  bg-white  w-full dark:bg-gray-900 dark:text-white duration-200 z-50">
      <div className="py-4  flex items-center">
        <div className="container flex items-center mr-12">
          {/* logo and links sections */}
        <div className="flex">
        <img src={img} className="h-8 mr-1 " alt="" />
        <a
            href="/"
            className="text-orange-400 font-semibold
        tracking-widest
        text-2xl
        uppercase sm:text-3xl"
          >
            
           Just Aid
          </a>
        </div>
          {/* Menu Items */}
          <div className=" hidden lg:block">
            <ul className="flex gap-4 items-center ">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href="{data.link}"
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {" "}
                    {data.name}
                  </a>
                </li>
              ))}
              {/*DropDown */}
              <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                >
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </a>
                {/*DropDownLinks */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px]  rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                  <ul className="space-y-2">
                    {DropdownLink.map((data) => (
                     
                     <>
                      <li>
                        <a
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full   p-2 hover:bg-primary/20 rounded-md font-semibold"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                     </> )
                      )}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*Navbar right section */}
        <div className="flex justify-between items-center gap-4">
          {/*Search bar section */}
          <div className="  relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="search-bar text-xl focus:outline-none"
            />
            <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-300" />
          </div>
          {/* order-button */}
          
          <div className="relative p-3 cursor-pointer">
            
           <Link to={"/cart"}>
           <IoCartOutline className="text-2xl text-gray-600 dark:text-gray-400" />
            <span className=" w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex item-center justify-center text-xs">
              {cartItems.length}
            </span>
           </Link>
           
          </div>
         
          {/* Dark mode section */}
          <div className="w-10">
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
