import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavbarProps } from "../../types";
import SearchBox from "../Search/SearchBox";

function Navbar(NavbarProps: NavbarProps) {
  const { hiddenCondition, absolute } = NavbarProps;
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${
        absolute ? "absolute" : ""
      } top-0 left-0 z-[1] flex items-center justify-between px-4 py-4 md:px-8 md:py-8 text-text gap-x-3 w-full xl:py-4 ${hiddenCondition}`}
    >
      <Link
        to="/"
        className="text-2xl font-bold uppercase md:text-4xl xl:text-2xl"
      >
        Movjp
      </Link>

      <div className="flex items-center justify-between xl:w-[60%] md:w-full md:ml-10 ">
        <div className="hidden text-2xl font-bold md:flex gap-x-5 xl:text-xl">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "border-b-4 border-blue-500" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/explore"
            className={`${
              location.pathname === "/explore"
                ? "border-b-4 border-blue-500"
                : ""
            }`}
          >
            Explore
          </Link>
        </div>
        <SearchBox />
      </div>
      {!menuOpen && (
        <FaBars
          className="text-2xl md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      )}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{ height: "35%", opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 80,
            }}
            className="fixed top-0 left-0 w-full h-[35%]  bg-mainBg py-5 overflow-hidden z-10"
          >
            <div className="flex flex-col items-center w-full h-full gap-y-5">
              <div className="flex flex-row items-center justify-between w-full px-4">
                <Link
                  className="inline-block text-3xl font-bold uppercase justify-self-center"
                  to="/"
                >
                  Movjp
                </Link>
                <AiOutlineClose
                  className="right-0 inline-block text-3xl justify-self-end"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                />
              </div>
              <Link className="text-xl" to="/">
                Home
              </Link>
              <Link className="text-xl" to="/explore">
                Explore
              </Link>
              <div className="text-center">
                <div className="text-xl font-medium">Contact</div>
                <div className="flex flex-row mt-1 text-3xl gap-x-2">
                  <a
                    href="https://www.facebook.com/quangg0705"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://github.com/holy5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/hi_this_is_gnauq/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
