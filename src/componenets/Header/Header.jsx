
import React, { useState } from "react";
import './Header.css';

const Header = ()=>{
    const [Toggle, ShowMenu]=useState(false);
    return(
        <div>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo"> Harsh</a>
                    <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link active-link">
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link active-link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" className="nav__link active-link">
                                    <i className="uil uil-briefcase nav__icon "></i> Education
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link active-link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio 
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link active-link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" onClick={() => ShowMenu(!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
                            <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;