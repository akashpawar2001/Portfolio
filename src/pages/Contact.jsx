import { useRef } from "react";
import { motion, easeOut, useInView } from "framer-motion";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="md:pt-20 pt-10">
      <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          end={{ scale: 0, opacity: 0.2 }}
          transition={{ delay: 0.5, ease: easeOut }}
          className="lg:col-span-4 md:col-span-5 col-span-full w-full rounded-2xl lg:p-8 p-6 relative"
        >
          <div className="py-4">
            <p className="text-lg font-medium">CONTACT INFO</p>
            <div className="flex flex-col py-8 gap-16">
              <div className="flex items-center gap-5 flex-wrap">
                <CiMail
                  className="text-blue-500 font-bold bg-white"
                  size={"35px"}
                />
                <div className="col-span-6">
                  <p className="text-sm text-gray-400">MAIL US</p>
                  <p className="text-gray-500">akashpawar7496@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 flex-wrap">
                <CiPhone
                  className="text-blue-500 font-bold bg-white"
                  size={"35px"}
                />
                <div className="col-span-6">
                  <p className="text-sm text-gray-400">CONTACT US</p>
                  <p className="text-gray-500">+91 8766936453</p>
                </div>
              </div>
              <div className="flex items-center gap-5 flex-wrap">
                <CiLocationOn
                  className="text-blue-500 font-bold bg-white"
                  size={"35px"}
                />
                <div className="col-span-6">
                  <p className="text-sm text-gray-400">LOCATION</p>
                  <p className="text-gray-500">Chakan, Maharashtra 410501</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <p className="text-lg font-medium">SOCIAL INFO</p>
            <div
              style={{
                transform: isInView ? "none" : "scale(0.5)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
              }}
              className="flex flex-col py-4 gap-16"
            >
              <div className="flex items-center justify-around gap-5">
                <div className="bg-white p-5 rounded-full hover:text-black text-blue-500 cursor-pointer">
                  <Link
                    to={"https://www.linkedin.com/in/akash-pawar-b55a54201"}
                    className=""
                  >
                    <FaLinkedin size={"35px"} />
                  </Link>
                </div>
                <div className="bg-white p-5 rounded-full hover:text-black text-blue-500 cursor-pointer">
                  <Link to={"https://github.com/akashpawar2001/"}>
                    <FaGithub size={"35px"} />
                  </Link>
                </div>
                <div className="bg-white p-5 rounded-full hover:text-black text-blue-500 cursor-pointer">
                  <RiInstagramLine size={"35px"} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 md:col-span-7 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12">
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.55, ease: easeOut }}
            className="col-span-full shadow-sm bg-white px-10 overflow-hidden flex flex-col items-start rounded-2xl relative"
          >
            <div className="w-full flex justify-end">
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2-2.png" />
            </div>
            <h1 className="text-4xl font-medium mt-2">
              Let's work <span className="text-blue-500">together.</span>
            </h1>
            <div className="w-full flex flex-col py-10 gap-4">
              <input
                type="text"
                placeholder="Name  *"
                className="bg-slate-50 p-3 w-full rounded-lg outline-none"
              />

              <input
                type="email"
                placeholder="Email  *"
                className="bg-slate-50 p-3 w-full rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Your Subject  *"
                className="bg-slate-50 p-3 w-full rounded-lg outline-none"
              />

              <textarea
                type="text"
                placeholder="Your Message  *"
                rows={5}
                className="bg-slate-50 p-3 w-full rounded-lg outline-none resize-none"
              />

              <button className="bg-[#323232] hover:bg-blue-500 p-3 rounded-xl text-white text-lg">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
