import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";

import ArticleHubMain from "../../assets/ArticleHub.png";
import ArticleHub2 from "../../assets/ArticleHub2.png";
import ArticleHub3 from "../../assets/ArticleHub3.png";
import ArticleHub4 from "../../assets/ArticleHub4.png";
import ArticleHub5 from "../../assets/ArticleHub5.png";
import ArticleHub6 from "../../assets/ArticleHub6.png";
function Articlehub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });
  return (
    <>
      <section className="py-10">
        <motion.div
          initial={{ scale: 0, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, ease: "backInOut" }}
        >
          <p className="text-gray-400 text-sm">
            <Link to={"/work"} className="tracking-wider">
              WORK{" "}
            </Link>
            / ARTICLEHUB
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.55, ease: "backInOut" }}
          className="flex gap-5 items-center py-10"
        >
          <h1 className="lg:text-5xl md:text-3xl tracking-wide font-bold inline">
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png"
              className="inline pr-2"
            />
            <span>Article Hub - Empowering Your Blogging Experience.</span>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2-2.png"
              className="inline pl-2"
            />
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, ease: "backInOut" }}
          className="w-full rounded-3xl overflow-hidden relative flex justify-center items-center group   "
        >
          <img src={ArticleHubMain} className="object-contain" />
          <div className="absolute w-full h-full bg-black/45 flex justify-center items-center -translate-x-full group-hover:translate-x-0">
            <div className="z-10 gap-12 flex w-full h-full items-center justify-center backdrop-blur-sm p-10 rounded-3xl">
              <a
                href="https://github.com/akashpawar2001/ArticleHub"
                target="_blank"
                className="flex flex-col justify-center items-center font-bold text-white drop-shadow-md hover:text-black z-20 cursor-pointer"
              >
                <FaGithub size={50} color="" />
                <span className="">GitHub</span>
              </a>
              <a
                href="http://appwritearticle.netlify.app"
                target="_blank"
                className="flex flex-col justify-center font-bold hover:text-blue-500 text-white drop-shadow-2xl    cursor-pointer items-center"
              >
                <CgLivePhoto size={50} color="" />
                <span className="">Live-Preview</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section ref={ref} className="py-5 bg-transparent">
        <div
          style={{
            transform: isInView ? "none" : "scale(0.5)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="grid grid-cols-12 rounded-2xl w-full bg-white relative py-5"
        >
          <div className="lg:col-span-6 col-span-full overflow-hidden flex gap-8 px-10 py-8 rounded-2xl bg-slate-50">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-bold">Technologies & Languages</h1>
              <div className="flex flex-col gap-1 text-justify">
                <ul className="flex flex-col gap-2 text-gray-400">
                  <li>
                    <span className="font-semibold text-blue-500">
                      Frontend :{" "}
                    </span>{" "}
                    HTML, CSS, React
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      Backend :{" "}
                    </span>{" "}
                    Javascript
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      User Authentication :{" "}
                    </span>{" "}
                    Sign up and log in functionalities ensure a personalized
                    experience for each user.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      Responsive Design :{" "}
                    </span>{" "}
                    Fully responsive interface ensures accessibility across
                    devices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-hidden items-center rounded-2xl absolute left-[48%]">
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2-2.png" />
          </div>
          <div className="lg:col-span-6 col-span-full overflow-hidden flex flex-col items-start px-10 py-8 rounded-2xl bg-slate-50">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-bold">Key Features</h1>
              <div className="flex flex-col gap-1">
                <ol className="flex flex-col gap-2 text-gray-400">
                  <li>
                    <span className="font-semibold text-blue-500">
                      1. User Authentication :{" "}
                    </span>{" "}
                    Users can sign up and log in securely to access their
                    personalized dashboard and features.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      2. Explore and Read Blogs :{" "}
                    </span>{" "}
                    Users can browse a wide range of blogs, from articles to
                    stories. The site supports Dark Mode for comfortable reading
                    at night.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      3. Blog Creation and Modification :{" "}
                    </span>{" "}
                    Users can easily write, publish, and edit their blogs. They
                    have full control over formatting, text styles, and adding
                    multimedia.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      4. CRUD Operations :{" "}
                    </span>{" "}
                    Users can create, read, update, and delete their blog posts
                    using a simple interface.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      5. Enhanced Search Functionality :{" "}
                    </span>{" "}
                    An advanced search box helps users find specific blogs or
                    topics quickly.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={ref5}>
        <div
          style={{
            transform: isInView5 ? "none" : "scale(0.5)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          className="rounded-3xl w-full mt-5 shadow-sm overflow-hidden"
        >
          <img src={ArticleHub2} className="object-cover" />
        </div>
      </section>
      <section ref={ref2}>
        <div
          style={{
            transform: isInView2 ? "none" : "scale(0)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
          className="grid grid-cols-12 md:gap-8 gap-4 pt-10"
        >
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.73s cubic-bezier(0.17, 0.55, 0.55, 1) 0.73s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ArticleHub3} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.76s cubic-bezier(0.17, 0.55, 0.55, 1) 0.76s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ArticleHub4} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.79s cubic-bezier(0.17, 0.55, 0.55, 1) 0.79s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ArticleHub5} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ArticleHub6} className="object-cover" />
          </div>
        </div>
      </section>
      <section ref={ref3}>
        <div
          style={{
            transform: isInView3 ? "none" : "scale(0.5)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.88s cubic-bezier(0.17, 0.55, 0.55, 1) 0.88s",
          }}
          className="rounded-2xl w-full bg-white relative py-5 mt-10 shadow-sm"
        >
          <div className="overflow-hidden flex gap-8 px-10 py-8">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-semibold">Project Description</h1>
              <div className="flex flex-col gap-1 text-justify">
                <p className="text-gray-400">
                  ArticleHub is a platform where users can write and share their
                  thoughts and experiences. After signing up or logging in,
                  users can explore many different blogs and use the easy tools
                  to create their own. They can format and edit their blogs
                  however they like, and download them in different formats.
                  ArticleHub also has a Dark Mode for better readability at
                  night. It's perfect for both new and experienced bloggers to
                  connect and share their content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10" ref={ref4}>
        <div
          style={{
            transform: isInView4 ? "none" : "scale(0.5)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          className="flex justify-center"
        >
          <button className="text-4xl bg-white shadow-sm px-10 py-8 rounded-3xl text-blue-500 hover:text-black">
            <Link to={"/work/project4"}>Next Project</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Articlehub;
