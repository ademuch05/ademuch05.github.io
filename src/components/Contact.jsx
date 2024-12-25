import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center md:mb-20 mb-16" id="contact">
      <h2 className="text-center text-6xl font-league-spartan font-bold my-16">GET in TOUCH</h2>
      <div className="sm:max-w-3xl w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        <div className="group order-1 text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500 ">
          <a href="mailto:ademuch80@gmail.com" className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2 " target="_blank">
            <HiOutlineMail />
            <span className="text-base group-hover:text-hover">Email</span>
          </a>
        </div>

        <div className="order-2 md:order-4 group text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
          <a href="https://github.com/ademuch05" className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2" target="_blank">
            <VscGithub />
            <span className="text-base group-hover:text-hover">Github</span>
          </a>
        </div>
        <div className="order-3 md:order-2 group text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
          <a
            href="https://www.linkedin.com/in/ade-muchlisidin-43ab99304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2"
            target="_blank"
          >
            <TbBrandLinkedin />
            <span className="text-base group-hover:text-hover">Linkedin</span>
          </a>
        </div>
        <div className="order-4 md:order-5 group text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
          <a href="https://t.me/ademuchl17" className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2" target="_blank">
            <FaTelegram />
            <span className="text-base group-hover:text-hover">Telegram</span>
          </a>
        </div>
        <div className="order-5 md:order-3 group text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
          <a href="https://instagram.com/ademuchl17" className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2" target="_blank">
            <FaInstagram />
            <span className="text-base group-hover:text-hover">Instagram</span>
          </a>
        </div>
        <div className="order-6 group text-4xl rounded-xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
          <a href="https://discord.com/users/ademuchl17" className="bg-slate-950 h-full w-full flex items-center gap-4 rounded-lg pl-4 pr-10 sm:py-4 py-2" target="_blank">
            <FaDiscord />
            <span className="text-base group-hover:text-hover">Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
