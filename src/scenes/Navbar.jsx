import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TfiMenu } from "react-icons/tfi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"
                } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-blue-ish";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3 shadow-md`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">NM</h4>

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-8 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.linkedin.com/in/nicolette-mabeza/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin size={26} />

                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://github.com/nicolettedmabeza"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub size={26} />

                        </a>
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red shadow-lg p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        < TfiMenu size={20} />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[200px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <IoCloseCircleOutline size={40} />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] font-opensans text-1xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
