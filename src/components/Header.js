import { useState } from "react";
import { Link } from "react-router";
const Header = () =>
{
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    return (
        <div className="flex justify-between ">

            <div className="logo-container ">
                <img className="w-36" src="https://images-platform.99static.com//c1rUMjustRTu74ku1H_E2ZE-ku8=/544x246:1493x1195/fit-in/500x500/99designs-contests-attachments/100/100984/attachment_100984026"></img>
            </div>
            <div className=" border-2 w-108 m-2" >
                <ul className="flex border-2 justify-between">
                    <Link to={'/'} className="links ">       <li >Home</li></Link>
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