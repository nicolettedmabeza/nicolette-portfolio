import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const ContactForm = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="contact" className="contact py-20">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        CONTACT <span className="text-red">ME</span>
                    </p>
                    <div className="flex justify-end my-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 flex justify-center"
                >

                    <div className="">
                        <div className="">
                            <MapContainer center={[33.77, -118.19]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[33.77, -118.19]}>
                                    <Popup>
                                        If you're in the area, let's chat!<br />
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <form
                        target="_blank"
                        // onSubmit={onSubmit}
                        action="https://formsubmit.co/82c24323ae2f77b90a020c963ef5f2a2"
                        method="POST"
                    >
                        <input
                            className="bg-opacity-25 rounded-lg w-full bg-blue font-semibold placeholder-opaque-black p-3 text-opacity-100"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className="bg-opacity-25 rounded-lg border-white w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-opacity-100"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="bg-opacity-25 rounded-lg w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-opacity-100"
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                            </p>
                        )}
                        <div className="flex space-x-6 justify-center">
                            <div className="basis-1/2">
                                <div className="text-center">
                                    <button
                                        onClick={onSubmit}
                                        className="w-full py-3 px-1 bg-gradient-rainblue rounded-lg font-semibold text-deep-blue mt-5 mb-5 hover:bg-gradient-red hover:text-white transition duration-500"
                                        type="submit"
                                    >
                                        SUBMIT FORM
                                    </button>
                                </div>
                            </div>
                            <div className="basis-1/2 h-full">
                                <div className="text-center h-full">
                                    <button
                                        onClick={() => window.location = 'mailto:nmabeza@gmail.com'}
                                        className="w-full py-3 px-1 bg-white rounded-lg font-semibold text-deep-blue mt-5 mb-5 hover:bg-red hover:text-white transition duration-500"
                                        type="submit"
                                    >
                                        SEND AN EMAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                </motion.div>
            </div>
        </section >
    );
};

export default ContactForm;
