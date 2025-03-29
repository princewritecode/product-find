import { Link } from "react-router";

const Footer = () =>
{
    return (
        <div className="bg-[#F3EEE8] py-6 shadow-md">
            <div className="max-w-7xl mx-auto px-6">
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                    <img
                        className="w-24 rounded-full"
                        src="https://images-platform.99static.com//c1rUMjustRTu74ku1H_E2ZE-ku8=/544x246:1493x1195/fit-in/500x500/99designs-contests-attachments/100/100984/attachment_100984026"
                        alt="Logo"
                    />
                </div>

                {/* Navigation Links */}
                {/* <div className="flex justify-center space-x-6 mb-4">
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
                </div> */}

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        <i className="fa-brands fa-facebook-square text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        <i className="fa-brands fa-twitter-square text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        <i className="fa-brands fa-instagram-square text-xl"></i>
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Made With Love By Prince Patel ♥️
                </div>
            </div>
        </div>
    );
};

export default Footer;