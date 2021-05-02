import React from 'react';
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <h2 style={{color:'white'}}>SHIHAB</h2>
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Resume</a>
                        </li>
                        <li>
                            <a href="">Blogs</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Navbar;