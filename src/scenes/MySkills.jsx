import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { DiPostgresql } from "react-icons/di";
import { SiDjango, SiJavascript, SiFastapi } from "react-icons/si";
import { FaDocker, FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:items-center md:gap-16 mt-10">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >

                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <div className="justify-start my-5">
                        <LineGradient width="w-1/2" />
                    </div>

                    <p className="mt-10 mb-7">
                        Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                        fames odio in at.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0 flex justify-center md:order-2">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 max-w-[300px]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/profile2.png"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10 w-full max-w-[300px]" src="assets/profile2.png" />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <div className="w-full relative h-32">
                    <Carousel
                        containerClass="container-with-dots"
                        infinite={true}
                        responsive={responsive}
                    >
                        <div>
                            < SiJavascript size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-3" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">JavaScript</h5>
                            </div>
                        </div>
                        <div>
                            < FaPython size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-1" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">Python</h5>
                            </div>
                        </div>
                        <div>
                            < FaHtml5 size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-1" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">HTML</h5>
                            </div>
                        </div>
                        <div>
                            < FaCss3Alt size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-1" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">CSS</h5>
                            </div>
                        </div>
                        <div>
                            < FaReact size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-2" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">React.js</h5>
                            </div>
                        </div>
                        <div>
                            < SiDjango size={100} className="max-w-[100px mx-auto transform transition duration-500 hover:scale-110 py-3" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">Django</h5>
                            </div>
                        </div>
                        <div>
                            < SiFastapi size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-3" style={{ color: "white" }} />
                            <div className="flex justify-center">
                                <h5 className="text-center">FastAPI</h5>
                            </div>
                        </div>
                        <div>
                            < FaDocker size={100} className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110" style={{ color: "white" }} />
                            {/* <img src="assets/profile.png" alt="Image" className="max-w-[100px] mx-auto" /> */}
                            <div className="flex justify-center">
                                <h5 className="text-center">Docker</h5>
                            </div>
                        </div>
                        <div>
                            < DiPostgresql
                                size={100}
                                className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110"
                                // onMouseOver={({ target }) => target.style.color = 'white'}
                                style={{ color: "white" }} />
                            <div className="flex justify-center">
                                <h5 className="text-center">PostgreSQL</h5>
                            </div>
                        </div>
                    </Carousel>
                </div>




            </div >
        </section >
    );
};

export default MySkills;
