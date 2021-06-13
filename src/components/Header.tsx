import React, { useState } from "react";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
import Link from 'next/link'


function Nav() {
    const { visible, toggle } = useTheme();
    const [responsiv, setResponsive] = useState(true)
    return (
        <nav className={classNames("fixed  top-0 z-10 font-mono flex flex-wrap items-center transition delay-200 justify-between w-full px-5 py-1 select-none", { 'bg-opacity-0 text-white': visible, ' bg-white shadow-custom': !visible })}>
            <div className="flex items-center flex-shrink-0 mr-3 text-xl font-bold">
                <Link href="/">
                    <p className="linkStyle">Logo</p>
                </Link>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle" onClick={() => setResponsive(!responsiv)} className="flex items-center px-3 py-2 border rounded border-winered text-winered hover:bg-winered hover:text-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className={classNames("font-medium text-xl flex-grow w-full pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0", { hidden: responsiv })} id="nav-content">
                <ul className="items-center justify-end flex-1 list-reset lg:flex">
                    <li className="mr-2">
                        <Link href="blog" ><p className="inline-block px-4 py-2 linkStyle">Blog</p></Link>
                    </li>
                    <li className="mr-2">
                        <Link href="#" ><p className="inline-block px-4 py-2 linkStyle">Contact Me</p></Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;