import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";
import { Logo } from "../assets";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Projects, SignUp } from "../components";
import { useSelector } from "react-redux";

function Home() {
  //state to check if the sideMenu is present or not.
  const [isSideMenu, setIsSideMenu] = useState(false);
  // to check if the user is unthenticated to use the home option/component  protected-routing
  const user = useSelector(state => state.user?.user);

  return (
    <>
      {/* using dynamic string literals for classname as the state is gonna change as we push the left screen out of the view and pull it again. */}
      {/* 40% flex for bigger screens or else 20% when sideMenu is true */}

      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor  */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer "
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          {/* logo  */}
          <Link to={"/home"}>
            <img src={Logo} alt="logo" className="object-contain w-72 h-auto" />
          </Link>

          {/* start coding  */}
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded border border-gray-400 cursor-pointer group hover:border-gray-200">
              <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                Start Coding!
              </p>
            </div>
          </Link>

          {/* home nav */}
          {/* conditional rendering/ protected routing  */}
          {user && (
            <Link
              to={"/home/projects"}
              className="flex items-center justify-center gap-6 "
            >
              <MdHome className="text-primaryText text-xl" />
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
      </div>

      {/* right section of the whole screen */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* top-section */}
        <div className="w-full flex items-center justify-between gap-3">
          {/* search  contains search icon and input element*/}
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearch className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600"
              placeholder="Search here..."
            />
          </div>

          {/* profile section : if the user is present then the ui is different and if not we show signup button */}
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3 "
            >
              {/* if the suer isnt present or logged in, show signup option */}
              <Link
                to={"/home/auth"}
                className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700 "
              >
                SignUp
              </Link>
            </motion.div>
          )}
          {user && <div></div>}
        </div>

        {/* bottom section: where we show Auth  */}
        <div className="w-full">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
