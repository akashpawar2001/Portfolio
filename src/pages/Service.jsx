import { useRef, useEffect } from "react";
import { motion, easeOut, useInView } from "framer-motion";

import { VscTerminalCmd } from "react-icons/vsc";
import { PiPencilCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";

function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <motion.div
            initial={{ opacity: 0.2, translateY: 100, scale: 0 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            end={{ scale: 0, opacity: 0.2 }}
            transition={{ delay: 0.5, ease: easeOut }}
            className="lg:col-span-4 col-span-full md:bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6"
          >
            {/* <a className="absolute w-full h-full cursor-pointer hover:opacity-100"></a> */}
            <div className="flex flex-col justify-center items-center gap-14">
              <div className="flex items-center gap-6 text-xl">
                <PiPencilCircleLight className="text-blue-500" size={35} />
                <h1 className="">Web Designing</h1>
              </div>
              <div className="flex items-center gap-6 text-xl">
                <VscTerminalCmd className="text-blue-500" size={30} />
                <h1 className="">Console Based</h1>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 col-span-full w-full overflow-hidden rounded-2xl grid gap-2 grid-cols-12 bg-white p-5">
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, ease: "backInOut" }}
              className="col-span-full rounded-xl flex justify-center gap-5 items-center"
            >
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
              <h1 className="lg:text-7xl md:text-3xl tracking-widest font-bold">
                MY OFFERING
              </h1>
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, translateX: 100 }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.55, ease: easeOut }}
              className="sm:col-span-6 col-span-full rounded-2xl overflow-hidden flex flex-col items-start gap-2 relative bg-gray-50 p-5"
            >
              <h1 className="font-bold tracking-widest">Web Designing</h1>
              <p className="text-gray-400">
                we offer comprehensive web designing services to create
                stunning, responsive, and user-friendly websites tailored to
                your business needs. Our offerings include custom web design,
                e-commerce solutions, UI/UX design, CMS integration,
                SEO-friendly design, and graphic design. Explore our portfolio
                and contact us today for a free consultation. Let’s build
                something amazing together!
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, translateX: 100 }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.55, ease: easeOut }}
              className="sm:col-span-6 col-span-full rounded-2xl overflow-hidden flex flex-col gap-2 items-start relative bg-gray-50 p-5"
            >
              <h1 className="font-bold tracking-widest">
                Console Based Application
              </h1>
              <p className="text-gray-400">
                we offer comprehensive web design services through a
                user-friendly console-based application. This application allows
                users to explore various services such as custom web design,
                e-commerce solutions, UI/UX design, CMS integration,
                SEO-friendly design, and graphic design. Users can interact with
                the application to select specific services, view detailed
                descriptions, obtain contact information, and explore our
                portfolio. Our goal is to provide tailored solutions using
                cutting-edge technology. Contact us today for a free
                consultation and let’s build something amazing together!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-6">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <div
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="md:col-span-5 lg:col-span-3 col-span-full shadow-sm bg-white px-5 py-2 overflow-hidden flex flex-col rounded-2xl relative"
          >
            <Link
              to={"/contact"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <div className="flex justify-around h-[150px] items-center py-8 w-full text-blue-500">
              <Link to={"/"} className="hover:text-black z-10">
                <AiOutlineGlobal size={"45px"} />
              </Link>
              <Link className="hover:text-black z-10">
                <LuTwitter size={"45px"} />
              </Link>
            </div>
            <div className="mt-10 flex justify-between">
              <div>
                <p className="text-gray-400 text-xs">STAY WITH ME</p>
                <h1 className="font-bold">Profiles</h1>
              </div>
            </div>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="md:col-span-7 lg:col-span-6 col-span-full shadow-sm bg-white px-5 py-2 overflow-hidden flex flex-col items-start rounded-2xl relative"
          >
            <Link
              to={"/contact"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2-2.png" />
            <h1 className="sm:text-5xl text-3xl font-medium mt-2">
              <p>Let's</p>
              <p>
                work <span className="text-blue-500">together.</span>
              </p>
            </h1>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:col-span-3 col-span-full bg-white shadow-sm rounded-xl flex flex-col px-4 py-5 relative"
          >
            <Link
              to={"/credentials"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/sign.png"
              className="lg:w-full h-[130px] object-contain"
            />
            <div className="mt-10 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs">MORE ABOUT ME</p>
                <h1 className="font-bold">Credentials</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
