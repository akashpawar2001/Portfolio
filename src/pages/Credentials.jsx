import { useRef, useEffect } from "react";
import { motion, easeOut, useInView } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHibernate, SiSpringboot } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BsDatabaseAdd, BsDatabaseUp } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Avtar from "../assets/Avtar.png";

function Credentials() {
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
            className="lg:col-span-4 md:col-span-5 col-span-full md:bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 md:sticky top-36 h-fit"
          >
            {/* <a className="absolute w-full h-full cursor-pointer hover:opacity-100"></a> */}
            <div className=" bg-transparent flex justify-center items-center p-2 ">
              <div
                className="md:w-full w-1/2 h-full rounded-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, #3C58E3 -15%, #C2EBFF 58%, #5AB5E2 97%)",
                }}
              >
                <img src={Avtar} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex justify-center py-5 flex-col items-center gap-4">
              <h1 className="text-3xl">Akash Pawar</h1>
              <p className="text-base text-gray-400">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akashpawar6453@gmail.com">
                  akashpawar6453@gmail.com
                </a>
              </p>
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
              <div className="bg-[#323232] hover:bg-blue-500 p-3 rounded-xl text-white text-lg w-full text-center cursor-pointer">
                <a>Download CV</a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 md:col-span-7 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, translateX: 100 }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.55, ease: easeOut }}
              className="col-span-full px-5 overflow-hidden flex flex-col items-start relative"
            >
              <h1 className="text-xl font-medium py-8">ABOUT ME</h1>
              <p className="text-gray-400 py-2">
                I'm Java Full Stack Developer, excited to kick off my career in
                tech. I've got a solid grasp of Java basics and a real hunger to
                learn more. Right now, I'm getting the hang of building the
                parts of websites you see and interact with, using stuff like
                HTML, CSS, and JavaScript. On the backend, I'm starting to
                figure out how to make things work smoothly using Java
                frameworks like Spring Boot and Hibernate, and I'm learning how
                to manage databases. I'm super motivated to solve problems and
                keep growing. I'm really keen to team up with more experienced
                folks, get involved in cool projects, and soak up knowledge like
                a sponge from mentors in the field. Let's chat and see how I can
                bring some fresh energy and ideas to your team!
                <br />
                <br />
                <br />
              </p>
            </motion.div>
            <section ref={ref} className="py-5 col-span-full">
              <div className="w-full">
                <div className=" flex rounded-2xl relative py-5">
                  <div
                    style={{
                      transform: isInView ? "none" : "scale(0.5)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                    }}
                    className="flex flex-col items-start gap-8"
                  >
                    <h1 className="font-semibold">EDUCATION</h1>
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="text-gray-400">2016-2017</p>
                      <p className="text-blue-500 text-lg">SSC Board</p>
                      <p className="text-gray-400">
                        Shree Shivaji Vidya Mandir,Chakan
                      </p>
                    </div>
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 1.55s cubic-bezier(0.17, 0.55, 0.55, 1) 1.55s",
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="text-gray-400">2018-2019</p>
                      <p className="text-blue-500 text-lg">HSC Board</p>
                      <p className="text-gray-400">
                        PK Commerce And Science Jr College,Kadachiwadi
                      </p>
                    </div>
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 1.58s cubic-bezier(0.17, 0.55, 0.55, 1) 1.58s",
                      }}
                      className="flex flex-col gap-1"
                    >
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

                <div className="flex flex-col items-start rounded-2xl relative py-5">
                  <div
                    style={{
                      transform: isInView ? "none" : "scale(0)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                    className="flex flex-col items-start gap-5"
                  >
                    <h1 className="font-semibold">SKILLS</h1>
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
                      }}
                      className="flex flex-col gap-1"
                    >
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
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 2.55s cubic-bezier(0.17, 0.55, 0.55, 1) 2.55s",
                      }}
                      className="flex flex-col gap-1"
                    >
                      {/* <p className="text-gray-400">2016-2017</p> */}
                      <p className="text-blue-500 text-lg">
                        Programming Languages
                      </p>
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
                    <div
                      style={{
                        transform: isInView ? "none" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 2.58s cubic-bezier(0.17, 0.55, 0.55, 1) 2.58s",
                      }}
                      className="flex flex-col gap-1"
                    >
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Credentials;
