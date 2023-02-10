import React from 'react';

import {close, logo, menu} from "../assets";
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);

    return (
        <nav className={"w-full flex py-6 justify-between items-center navbar"}>
            <img src={logo} alt={"hoobank"} className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks?.map((item, i) => {
                    return <li key={"nav_" + i}
                               className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 last:mr-0 hover:opacity-75 ease-in-out duration-300">
                        <a href={`${item.id}`}>{item.title}</a>
                    </li>
                })}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt={toggle ? "close menu" : "open menu"}
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks?.map((item, i) => {
                            return <li key={"nav_" + i}
                                       className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4 last:mb-0 hover:opacity-75 ease-in-out duration-300">
                                <a href={`${item.id}`}>{item.title}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;