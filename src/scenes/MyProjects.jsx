import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {

    // const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            < a
                href={link}
                target="_blank"
            >
                <div className="p-5">
                    <div className="group relative">
                        <img className="max-h-[400px] w-full object-cover"
                            src="./assets/profile.png" />
                        <div
                            className="rounded absolute top-0 left-0 w-full px-2 h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">
                            <h1 className="text-2xl text-white font-playfair">{title}</h1>
                            <p className="text-white text-center font-playfair">{description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

const Projects = () => {
    return (

        <section id="projects" className="pt-20 pb-20">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                    fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                    purus nec eget eleifend ut elit.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <Project
                        title="Concerto"
                        description="Find concerts and discover music in your area."
                        link="https://github.com/nicolettedmabeza/concerto" />
                    <Project title="Auto Aid"
                        description="Manage car inventory,service appointments and salesperson outcomes on one site. "
                        link="https://github.com/nicolettedmabeza/auto-aid" />
                    <Project title="Summit Solutions"
                        description=""
                        link="https://github.com/nicolettedmabeza/summit-solutions" />

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
