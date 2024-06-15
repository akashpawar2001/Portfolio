import { useRef, useEffect } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  easeOut,
  useInView,
} from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHibernate, SiSpringboot } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BsDatabaseAdd, BsDatabaseUp } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";
import Avtar from "../assets/Avtar.png";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            end={{ scale: 0, opacity: 0.2 }}
            transition={{ delay: 0.5, ease: easeOut }}
            className="lg:col-span-4 md:col-span-5 col-span-full md:bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
          >
            <a className="absolute w-full h-full cursor-pointer hover:opacity-100"></a>
            <div className=" bg-transparent flex justify-center items-center p-2 ">
              <div
                className=" md:w-full h-full rounded-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, #3C58E3 -15%, #C2EBFF 58%, #5AB5E2 97%)",
                }}
              >
                <img src={Avtar} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 md:col-span-7 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12">
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, ease: easeOut }}
              className="col-span-full rounded-xl flex justify-center gap-5 items-center px-3"
            >
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
              <h1 className="lg:text-5xl text-2xl tracking-widest font-bold">
                SELF-SUMMARY
              </h1>
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, ease: easeOut }}
              className="col-span-full shadow-sm bg-white px-5 overflow-hidden flex flex-col items-start rounded-2xl relative"
            >
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2-2.png" />
              <h1 className="text-4xl font-medium mt-2">Akash Pawar</h1>
              <p className="text-gray-400 py-2">
                I am a passionate and skilled Java Full Stack Developer with a
                strong foundation in both front-end and back-end development. My
                journey in the world of technology began with a fascination for
                solving complex problems and a drive to create innovative
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section ref={ref} className="py-5">
        <div className="grid grid-cols-12 sm:gap-10 gap-5  w-full">
          <div
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="md:col-span-6 col-span-full shadow-sm bg-white overflow-hidden flex gap-8 p-6 rounded-2xl relative "
          >
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-semibold">EDUCATION</h1>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400">2016-2017</p>
                <p className="text-blue-500 text-lg">SSC Board</p>
                <p className="text-gray-400">
                  Shree Shivaji Vidya Mandir,Chakan
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400">2018-2019</p>
                <p className="text-blue-500 text-lg">HSC Board</p>
                <p className="text-gray-400">
                  PK Commerce And Science Jr College,Kadachiwadi
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400">2019-2013</p>
                <p className="text-blue-500 text-lg">
                  Bachelor Degree in Computer Engineering
                </p>
                <p className="text-gray-400">
                  Dr DY Patil Institute of Engineering,Ambi
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              transform: isInView ? "none" : "scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="md:col-span-6 col-span-full shadow-sm bg-white p-6 overflow-hidden flex flex-col items-start rounded-2xl relative"
          >
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-semibold">SKILLS</h1>
              <div className="flex flex-col gap-1">
                {/* <p className="text-gray-400">2016-2017</p> */}
                <p className="text-blue-500 text-lg">Web Technologies</p>
                <p className="text-gray-400 flex gap-5 flex-wrap">
                  <span className="flex items-center gap-1">
                    <FaHtml5 />
                    Html
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCss3 />
                    Css
                  </span>
                  <span className="flex items-center gap-1">
                    <IoLogoJavascript />
                    Javascript
                  </span>
                  <span className="flex items-center gap-1">
                    <FaReact />
                    ReactJS
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {/* <p className="text-gray-400">2016-2017</p> */}
                <p className="text-blue-500 text-lg">Programming Languages</p>
                <p className="text-gray-400 flex gap-5 flex-wrap">
                  <span className="flex items-center gap-1">
                    <FaJava />
                    Java
                  </span>
                  <span className="flex items-center gap-1">
                    <BsDatabaseUp />
                    Jdbc
                  </span>
                  <span className="flex items-center gap-1">
                    <CgWebsite />
                    Servlet
                  </span>
                  <span className="flex items-center gap-1">
                    <SiHibernate />
                    Hibernate
                  </span>
                  <span className="flex items-center gap-1">
                    <SiSpringboot />
                    Spring Boot
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {/* <p className="text-gray-400">2016-2017</p> */}
                <p className="text-blue-500 text-lg">Databases</p>
                <p className="text-gray-400 flex gap-5">
                  <span className="flex items-center gap-1">
                    <BsDatabaseAdd />
                    Java
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref2} className="py-6">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0.5)",
              opacity: isInView2 ? 1 : 0,
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
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
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
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
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

export default About;
