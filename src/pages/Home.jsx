import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiPencilCircle } from "react-icons/pi";
import { IoColorFilterOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import Avtar from "../assets/Avtar.png";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  easeInOut,
  easeOut,
  useInView,
} from "framer-motion";
function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 50, { duration: 5 });
    return animation.stop;
  }, []);
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            end={{ scale: 0, opacity: 0.2 }}
            transition={{ delay: 0.5, ease: easeOut }}
            className="lg:col-span-6 col-span-full bg-white shadow-sm w-full rounded-2xl grid grid-cols-12 place-content-center p-8 md:mb-4 relative"
          >
            <Link
              to={"/about"}
              className="absolute left-0 top-0 w-full h-full cursor-pointer opacity-0 link-style"
            ></Link>
            <div className="sm:col-span-6 col-span-full bg-transparent flex justify-center items-center p-2 ">
              <div
                className="w-full h-full"
                style={{
                  borderRadius: "30px 0 30px 0px",
                  background:
                    "linear-gradient(90deg, #3C58E3 -15%, #C2EBFF 58%, #5AB5E2 97%)",
                }}
              >
                <img src={Avtar} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="sm:col-span-6 col-span-full bg-transparent px-5 py-6 overflow-hidden">
              <p className="text-gray-300 text-xs p-1">A WEB DEVELOPER</p>
              <h1 className="text-4xl font-semibold p-1">
                Akash <span className="sm:block">Pawar.</span>
              </h1>
              <p className="text-gray-400 text-xs p-1">
                I am a Web Developer based in India.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12">
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              end={{ scale: 0, opacity: 0.2 }}
              transition={{ delay: 0.55, ease: "backInOut" }}
              className="col-span-full shadow-sm bg-white rounded-xl h-10 flex justify-center items-center px-3"
            >
              <marquee>
                <ul className="flex gap-5">
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                  <li className="list-disc text-gray-400 text-xs">
                    LATEST WORK AND{" "}
                    <span className="text-blue-500">FEATURED</span>
                  </li>
                </ul>
              </marquee>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.58, ease: easeOut }}
              className="sm:col-span-6 col-span-full bg-white shadow-sm rounded-xl flex flex-col px-4 py-5 relative"
            >
              <Link
                to="/credentials"
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
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, ease: easeOut }}
              className="sm:col-span-6 col-span-full bg-white shadow-sm rounded-xl flex flex-col px-4 py-5 relative"
            >
              <Link
                to="/work"
                className="absolute w-full h-full cursor-pointer"
              ></Link>
              <img
                src="	https://wpriverthemes.com/landing/gridx-html/assets/images/my-works.png"
                className="lg:w-full h-[130px] object-contain"
              />
              <div className="mt-10 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs">SHOWCASE</p>
                  <h1 className="font-bold">Projects</h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-6">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <div
            style={{
              transform: isInView ? "none" : "scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:col-span-6 col-span-full shadow-sm bg-white py-10 px-5 overflow-hidden flex flex-col items-center rounded-2xl relative"
          >
            <Link
              to={"/service"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <div className="flex sm:gap-20 gap-8 justify-center items-center py-8 w-full text-blue-500">
              <MdOutlineCameraAlt size={"40px"} />
              <PiPencilCircle size={"40px"} />
              <IoColorFilterOutline size={"40px"} />
              <IoIosPhonePortrait size={"40px"} />
            </div>
            <div className="mt-14 w-full">
              <p className="text-gray-400 text-xs">SPECIALIZATION</p>
              <h1 className="font-bold">Services Offering</h1>
            </div>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.55s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
            }}
            className="lg:col-span-6 col-span-full shadow-sm bg-white py-10 px-5 overflow-hidden flex flex-col items-center rounded-2xl relative"
          >
            <Link
              to={"/contact"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <div className="flex justify-around items-center py-8 w-full text-blue-500">
              <AiOutlineGlobal size={"40px"} />
              <LuTwitter size={"40px"} />
            </div>
            <div className="mt-14 w-full">
              <p className="text-gray-400 text-xs">STAY WITH ME</p>
              <h1 className="font-bold">Profiles</h1>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref2} className="py-5">
        <div className="grid grid-cols-12 sm:gap-10 gap-5  w-full">
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0.5)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:col-span-6 col-span-full shadow-sm bg-white h-[200px] px-14 overflow-hidden flex gap-8 items-center justify-center rounded-2xl relative "
          >
            <Link
              to={"/work"}
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <div className="flex flex-col items-center">
              <div className="text-blue-500 flex items-center">
                <motion.h1 className="text-3xl">{rounded}</motion.h1>
                <span> +</span>
              </div>
              <h1 className="text-sm text-gray-400 font-medium mt-2 text-center">
                TOTAL PROJECTS.
              </h1>
            </div>
          </div>

          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:col-span-6 col-span-full shadow-sm bg-white h-[200px] px-5 overflow-hidden flex flex-col items-start rounded-2xl relative"
          >
            <Link
              to="/contact"
              className="absolute w-full h-full cursor-pointer"
            ></Link>
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2-2.png" />
            <h1 className="text-4xl font-medium mt-2">
              <p>Let's</p>
              <p>
                work <span className="text-blue-500">together.</span>
              </p>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
