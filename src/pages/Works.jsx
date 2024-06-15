import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Artstudio from "../assets/ArtStudio.png";
import AdmilPanel from "../assets/AdminPanel.png";

import { FaGithub } from "react-icons/fa";
function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section className="md:pt-20 pt-10 pb-5">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.55, ease: "backInOut" }}
            className="col-span-full rounded-xl flex justify-center gap-5 items-center px-3 md:hidden"
          >
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
            <h1 className="lg:text-7xl text-2xl tracking-widest font-bold">
              ALL PROJECTS
            </h1>
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, ease: "backInOut" }}
            className="md:col-span-4 col-span-full bg-white md:shadow-sm w-full h-fit rounded-2xl place-content-center lg:p-8 p-6 relative"
          >
            <Link
              to={"/work/project1"}
              className="absolute w-full h-full cursor-pointer hover:opacity-100"
            ></Link>
            <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
              <div className="w-full h-full rounded-3xl shadow-sm">
                <img
                  src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66432855eb5600c364b27e99/screenshot_2024-05-14-09-01-13-0000.webp&fit=cover&h=500&w=800"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="pt-3 flex justify-between">
              <div>
                <h1 className="text-gray-400 text-sm">WEB DESIGNING</h1>
                <h1 className="text-xl font-semibold">Resume Wiz</h1>
              </div>
              <Link
                to={"https://github.com/akashpawar2001/ResumeWiz"}
                className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer"
              >
                <FaGithub size={35} color="" />
              </Link>
            </div>
          </motion.div>

          <div className="md:col-span-8 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12">
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, ease: "backInOut" }}
              className="col-span-full rounded-xl  justify-center gap-5 items-center px-3 md:flex hidden"
            >
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
              <h1 className="lg:text-7xl md:text-3xl tracking-widest font-bold">
                ALL PROJECTS
              </h1>
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              end={{ scale: 0, opacity: 0.2 }}
              transition={{ delay: 0.6, ease: "backInOut" }}
              className="md:col-span-6 col-span-full bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
            >
              <Link
                to={"/work/project2"}
                className="absolute w-full h-full cursor-pointer hover:opacity-100"
              ></Link>
              <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
                <div className="w-full h-full rounded-3xl shadow-sm">
                  <img
                    src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66431f1d9a4cd6b463355941/screenshot_2024-05-14-08-21-56-0000.webp&fit=cover&h=500&w=800"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-between">
                <div>
                  <h1 className="text-gray-400 text-sm">WEB DESIGNING</h1>
                  <h1 className="text-xl font-semibold">Gallary Pics</h1>
                </div>
                <Link
                  to={"https://github.com/akashpawar2001/Pixabey_Replica"}
                  className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer"
                >
                  <FaGithub size={35} color="" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              end={{ scale: 0, opacity: 0.2 }}
              transition={{ delay: 0.65, ease: "backInOut" }}
              className="md:col-span-6 col-span-full bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
            >
              <Link
                to={"/work/project3"}
                className="absolute w-full h-full cursor-pointer hover:opacity-100"
              ></Link>
              <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
                <div className="w-full h-full rounded-3xl shadow-sm">
                  <img
                    src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65d9ed5e24fc2af3da40984f/screenshot_2024-02-24-13-21-39-0000.webp&fit=cover&h=500&w=800"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-between">
                <div>
                  <h1 className="text-gray-400 text-sm">WEB DESIGNING</h1>
                  <h1 className="text-xl font-semibold">Article Hub</h1>
                </div>
                <Link
                  to={"https://github.com/akashpawar2001/ArticleHub"}
                  className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer"
                >
                  <FaGithub size={35} color="" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-12 sm:gap-10 gap-5 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            end={{ scale: 0, opacity: 0.2 }}
            transition={{ delay: 0.7, ease: "backInOut" }}
            className="md:col-span-4 h-fit  col-span-full bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
          >
            <Link
              to={"/work/project4"}
              className="absolute w-full h-full cursor-pointer hover:opacity-100"
            ></Link>
            <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
              <div className="w-full h-full rounded-3xl shadow-sm">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/96ef4547844213.5886e51312784.png"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="pt-3 flex justify-between">
              <div>
                <h1 className="text-gray-400 text-sm">WEB DESIGNING</h1>
                <h1 className="text-xl font-semibold">
                  Expense Manager <br />
                  Application
                </h1>
              </div>
              <a className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer">
                <FaGithub size={35} color="" />
              </a>
            </div>
          </motion.div>
          <div className="md:col-span-8 col-span-full w-full overflow-hidden rounded-2xl grid gap-5 grid-cols-12 h-fit py-5">
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              end={{ scale: 0, opacity: 0.2 }}
              transition={{ delay: 0.75, ease: "backInOut" }}
              className="lg:col-span-6 md:col-span-6 col-span-full bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
            >
              <Link
                to={"/work/project5"}
                className="absolute w-full h-full cursor-pointer hover:opacity-100"
              ></Link>
              <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
                <div className="w-full h-full rounded-3xl shadow-sm">
                  <img
                    src={Artstudio}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-between">
                <div>
                  <h1 className="text-gray-400 text-sm">
                    JAVA BASED WEB PROJECT
                  </h1>
                  <h1 className="text-xl font-semibold">Art Studio</h1>
                </div>
                <a className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer">
                  <FaGithub size={35} color="" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              end={{ scale: 0, opacity: 0.2 }}
              transition={{ delay: 0.8, ease: "backInOut" }}
              className="md:col-span-6 col-span-full bg-white md:shadow-sm w-full rounded-2xl place-content-center lg:p-8 p-6 relative"
            >
              <Link
                to={"/work/project6"}
                className="absolute w-full h-full cursor-pointer hover:opacity-100"
              ></Link>
              <div className=" bg-transparent flex justify-center items-center flex-col p-2 ">
                <div className="w-full  h-full rounded-3xl shadow-sm">
                  <img
                    src={AdmilPanel}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-between">
                <div>
                  <h1 className="text-gray-400 text-sm">
                    JAVA BASED WEB Project
                  </h1>
                  <h1 className="text-xl font-semibold">
                    Admin Panel for ArtStudio
                  </h1>
                </div>
                <a className="flex flex-col justify-center items-center font-bold text-gray-400 drop-shadow-md hover:text-black z-20 cursor-pointer">
                  <FaGithub size={35} color="" />
                </a>
              </div>
            </motion.div>

            <section className="w-full col-span-full pt-5" ref={ref}>
              <div
                style={{
                  transform: isInView ? "none" : "scale(0.5)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                }}
                className="flex justify-center"
              >
                <button className="md:text-4xl text-2xl font-bold bg-white shadow-sm px-10 py-8 rounded-3xl text-blue-500 hover:text-black">
                  <Link
                    target="_blank"
                    to={"https://github.com/akashpawar2001?tab=repositories"}
                  >
                    More Project
                  </Link>
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
