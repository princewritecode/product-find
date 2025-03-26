import { useState } from "react";
import { Link } from "react-router";

const Header = () =>
{
    const [hamburgerMenu, setHamburgerMenu] = useState(true);

    return (
        <div className="bg-[#F3EEE8] flex justify-between items-center px-6 py-4 shadow-md">
            {/* Logo Section */}
            <div className="logo-container">
                <img
                    className="w-36 rounded-full"
                    src="https://images-platform.99static.com//c1rUMjustRTu74ku1H_E2ZE-ku8=/544x246:1493x1195/fit-in/500x500/99designs-contests-attachments/100/100984/attachment_100984026"
                    alt="Logo"
                />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
                    Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                    About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                    Contact
                </Link>
                <Link to="/cart" className="text-gray-700 hover:text-gray-900 font-medium">
                    Cart
                </Link>
                <button className="bg-[#E0CFCB] text-white py-2 px-4 rounded-lg hover:bg-[#D1B7B3] transition">
                    Login
                </button>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button
                    onClick={() => setHamburgerMenu(!hamburgerMenu)}
                    className="text-gray-700 focus:outline-none"
                >
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {hamburgerMenu && (
                <div className="absolute top-full left-0 w-full bg-[#F3EEE8] shadow-md md:hidden">
                    <ul className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="hover:cursor-pointer text-gray-700 hover:text-gray-900 font-medium">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium hover:cursor-pointer">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium hover:cursor-pointer">
                            Contact
                        </Link>
                        <Link to="/cart" className="text-gray-700 hover:text-gray-900 font-medium hover:cursor-pointer">
                            Cart
                        </Link>
                        <button className=" hover:cursor-pointer bg-[#E0CFCB] text-white py-2 px-4 rounded-lg hover:bg-[#D1B7B3] transition">
                            Login
                        </button>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
