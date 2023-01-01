import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import LineGradient from "../components/LineGradient";

const Landing = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const [showImage, setShowImage] = useState(false);
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full py-100 pb-16"
        >
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-20 md:mt-20 flex justify-center md:order-2">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-10"
                    >
                        <img
                            alt="profile"
                            className="hover:opacity-50 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile.png"
                        // onMouseOver={e => (e.currentTarget.src = "assets/profile2.png")}
                        // onMouseOut={e => (e.currentTarget.src = "assets/profile.png")}

                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[300px] md:max-w-[500px]"
                        src="assets/profile.png"
                    />
                )}
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-4/5 mt-5 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-5xl font-semibold font-playfair z-10 text-center md:text-start pb-4">
                        <span className="text-red">NICOLETTE</span> MABEZA
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >

                    <p className="text-2xl font-playfair z-10 text-center md:text-start">
                        Full Stack Software Engineer
                    </p>
                    <div className="mt-5 flex justify-center md:justify-start">
                        <LineGradient width="w-1/2" />
                    </div>

                    {/* <div className="mx-auto">
                        <span class="inline-block font-playfair text-2xl">Full Stack Software Engineer</span>
                    </div> */}
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-center mt-8 mb-7 text-sm md:text-left">
                        As a software engineer, I am driven by my love for solving problems and my desire to make a positive impact through technology. Before transitioning to this field, I worked as a nurse for several years, where I honed my critical thinking skills and developed a dedication to helping others. I am a collaborative team player and thrive in environments where I can work with others to find innovative solutions to complex problems. Leveraging my passion for learning and problem solving has led me to a career in software engineering, where I am constantly faced with new challenges and opportunities to learn and grow.
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-gradient-red hover:text-white hover:duration-200 transition duration-500 mr-5 shadow-lg"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>

                    <a
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 pl-0.5"
                        href="https://drive.google.com/file/d/1nUaLeaZkYD5318vkme8EzcqPAzf3j3NK/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"

                    >
                        <div className="bg-deep-blue hover:text-red hover:duration-200 hover:bg-white transition duration-500 w-full h-full flex items-center justify-center px-10 rounded">
                            Resume
                        </div>
                    </a>


                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                </motion.div>
            </div>
        </section >
    );
};

export default Landing;
