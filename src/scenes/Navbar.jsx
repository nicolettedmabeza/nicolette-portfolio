import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"
                } `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Mobile = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"
                } block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-yellow`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};



const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const navbarBackground = isTopOfPage ? "" : "dark:bg-deep-blue border-b border-gray-200 dark:border-gray-600";

    return (
        <div className="flex relative items-center justify-between mx-auto w-5/6">

            {/* DESKTOP NAV */}
            <div className="flex items-center justify-between mx-auto w-5/6 gap-8 font-semibold">
                <nav className={`${navbarBackground} py-2  fixed w-full z-50 top-0 left-0`}>
                    <div className="relative container flex flex-wrap items-center justify-between mx-auto w-5/6">
                        <img src="./assets/logo1.png" className="h-12 mr-3 md:h-[55px]" alt="Flowbite Logo" />
                        <div className="flex md:order-2">
                            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 dark:border-gray-700">
                                <li>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Skills"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <a
                                        className="hover:opacity-50 transition duration-500"
                                        href="https://www.linkedin.com/in/nicolette-mabeza/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLinkedin size={26} />

                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:opacity-50 transition duration-500"
                                        href="https://github.com/nicolettedmabeza"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={26} />

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* MOBILE NAV */}
                {isMenuToggled && (
                    <div id="dropdownNavbar" className="md:hidden fixed top-14 z-50 right-0 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Mobile
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Skills"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li className="px-4 py-2">
                                <a
                                    className="hover:opacity-50 transition duration-500"
                                    href="https://www.linkedin.com/in/nicolette-mabeza/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin size={26} />

                                </a>
                            </li>
                            <li className="px-4 py-2">
                                <a
                                    className="hover:opacity-50 transition duration-500"
                                    href="https://github.com/nicolettedmabeza"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub size={26} />

                                </a>
                            </li>
                        </ul>
                    </div>

                )}
            </div>


            {/* MOBILE MENU POPUP */}

        </div>

    );
};

export default Navbar;
