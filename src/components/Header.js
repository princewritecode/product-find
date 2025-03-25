import { useState } from "react";
import { Link } from "react-router";
const Header = () =>
{
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    return (
        <div className="bg-[#F3EEE8] flex justify-between m-0 px-4 items-center ">

            <div className="logo-container ">
                <img className="w-36 rounded-[50%]" src="https://images-platform.99static.com//c1rUMjustRTu74ku1H_E2ZE-ku8=/544x246:1493x1195/fit-in/500x500/99designs-contests-attachments/100/100984/attachment_100984026"></img>
            </div>
            <div className="  w-108  h-12" >
                <ul className="flex  justify-between items-center">
                    <Link to={'/'} className=""><li>Home</li></Link>
                    <Link to={'/about'} className="links"><li >About</li></Link>
                    <Link to={'/contact'} className="links"><li >Contact</li></Link>
                    <Link to='#' className="links"><li >Cart</li></Link>
                    <button className="user-btn links">Login</button>
                </ul>
                {/* <li className="menu"><i className="fa-solid fa-bars"></i></li> */}
            </div>

        </div>
    );
};

export default Header;