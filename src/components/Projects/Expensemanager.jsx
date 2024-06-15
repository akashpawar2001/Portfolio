import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";

import ExpanseManagerMain from "../../assets/ExpanseManager.png";
import ExpanseManager2 from "../../assets/ExpanseManager2.png";
import ExpanseManager3 from "../../assets/ExpanseManager3.png";
import ExpanseManager4 from "../../assets/ExpanseManager4.png";
import ExpanseManager5 from "../../assets/ExpanseManager5.png";
import ExpanseManager6 from "../../assets/ExpanseManager6.png";
import ExpanseManager7 from "../../assets/ExpanseManager7.png";
import ExpanseManager8 from "../../assets/ExpanseManager8.png";

function Expensemanager() {
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
            / EXPANSETRACKER
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
            <span>Expanse Tracker - Manage Your Finances with Ease.</span>
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
          className="w-full rounded-3xl overflow-hidden relative flex justify-center items-center group "
        >
          <img src={ExpanseManagerMain} className="object-contain" />
          <div className="absolute w-full h-full bg-black/45 flex justify-center items-center -translate-x-full group-hover:translate-x-0">
            <div className="z-10 gap-12 flex w-full h-full items-center justify-center backdrop-blur-sm p-10 rounded-3xl">
              <a
                href="https://github.com/akashpawar2001/ExpanseTracker/tree/main/ExpenseTracker"
                target="_blank"
                className="flex flex-col justify-center items-center font-bold text-white drop-shadow-md hover:text-black z-20 cursor-pointer"
              >
                <FaGithub size={50} color="" />
                <span className="">GitHub</span>
              </a>
              <a
                target="_blank"
                className="flex line-through flex-col justify-center font-bold hover:text-blue-500 text-white drop-shadow-2xl cursor-not-allowed   items-center"
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
              <h1 className="font-semibold">Technologies & Languages</h1>
              <div className="flex flex-col gap-1 text-justify">
                <ul className="flex flex-col gap-2 text-gray-400">
                  <li>
                    <span className="font-semibold text-blue-500">
                      Frontend :{" "}
                    </span>{" "}
                    HTML, CSS, Javascript
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      Backend :{" "}
                    </span>{" "}
                    Java, Servlet, JDBC, SQL
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      Tools :{" "}
                    </span>{" "}
                    Eclipse, Chrome Browser, SQLYog
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      Server :{" "}
                    </span>{" "}
                    Apache Tomcat v9.0
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
              <h1 className="font-semibold">Key Features</h1>
              <div className="flex flex-col gap-1">
                <ol className="flex flex-col gap-2 text-gray-400">
                  <li>
                    <span className="font-semibold text-blue-500">
                      1. User Accounts :{" "}
                    </span>{" "}
                    Users can sign up and log in to the system.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      2. Add Transactions :{" "}
                    </span>{" "}
                    Users can add entries for income and expenses.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">
                      3. Track Transactions :{" "}
                    </span>{" "}
                    Users can view and track their daily, weekly, and monthly
                    income and expenses.
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
          <img src={ExpanseManager2} className="object-cover" />
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
            <img src={ExpanseManager3} className="object-cover " />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.76s cubic-bezier(0.17, 0.55, 0.55, 1) 0.76s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ExpanseManager4} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.79s cubic-bezier(0.17, 0.55, 0.55, 1) 0.79s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ExpanseManager5} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ExpanseManager6} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.83s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ExpanseManager7} className="object-cover" />
          </div>
          <div
            style={{
              transform: isInView2 ? "none" : "scale(0)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.86s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            className="md:col-span-6 col-span-full rounded-3xl w-full overflow-hidden shadow-sm"
          >
            <img src={ExpanseManager8} className="object-cover" />
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
              <h1 className="font-semibold">DESCRIPTION</h1>
              <div className="flex flex-col gap-1 text-justify">
                <p className="text-gray-400">
                  The Expense Tracker is designed to help users manage their
                  finances by tracking their income and expenses. After logging
                  in, users can add entries for income and expenses, which are
                  stored and displayed in a table format. This allows users to
                  easily see their total income and total expenses. The system
                  categorizes and tracks these transactions, making it easy for
                  users to monitor their financial activity over different time
                  periods (daily, weekly, monthly).
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
            <Link to={"/work/project5"}>Next Project</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Expensemanager;
