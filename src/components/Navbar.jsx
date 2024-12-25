import logo from "../assets/amdevLogo.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [black, setBlack] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
    setBlack(!black);
  };

  let menuActive = show ? "translate-x-0" : "translate-x-full ";
  let textBlack = black ? "text-black" : "text-neutral-300";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        // console.log(show);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "bg-black/75  shadow shadow-slate-700 " : "";

  return (
    <nav className={`fixed w-full flex justify-center z-[5] transition py-4 ${scrollActive} `}>
      <div className=" flex items-center justify-between container mx-4">
        <a href="" className="flex flex-shrink-0 gap-3 items-center z-10">
          <img className="w-10" src={logo} alt="" />
          <p className={`${textBlack} transition`}>AMDEV</p>
        </a>
        <div
          className={`fixed md:static flex flex-col text-black top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  md:text-neutral-300 justify-between md:justify-center ${menuActive}  md:translate-x-0 transition-all md:transition-none md:duration-0 duration-700`}
        >
          <ul className=" flex md:gap-36 md:flex-row flex-col items-center mt-36 gap-16 md:mt-0 h-5/6">
            <li className="hover:text-hover">
              <a href="#projects" onClick={handleClick}>
                PROJECT
              </a>
            </li>
            <li className="hover:text-hover">
              <a href="#profile" onClick={handleClick}>
                PROFILE
              </a>
            </li>
            <li className="hover:text-hover">
              <a href="#contact" onClick={handleClick}>
                CONTACT
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center md:hidden h-1/6">
            <p className=" block mb-4 ">Let's Talk</p>
            <div className="flex text-2xl gap-4  mb-8">
              <a href="https://instagram.com/ademuchl17">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/ade-muchlisidin-43ab99304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <TbBrandLinkedin />
              </a>
              <a href="https://github.com/ademuch05">
                <VscGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex text-2xl gap-3 hidden">
          <a href="https://instagram.com/ademuchl17">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ade-muchlisidin-43ab99304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <TbBrandLinkedin />
          </a>
          <a href="https://github.com/ademuch05">
            <VscGithub />
          </a>
        </div>
        <div className={`text-2xl md:hidden block z-10 ${textBlack} transition`} onClick={handleClick}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
