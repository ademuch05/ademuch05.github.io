import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { SiCanva } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { RiOpenaiFill } from "react-icons/ri";

import { motion } from "motion/react";

const iconVariants = (delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
});

const Technologies = () => {
  return (
    <div className="py-24">
      <div>
        <h3 className="text-4xl font-bold text-center my-16">TECHNOLOGIES</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.div variants={iconVariants(0)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <RiBootstrapLine className="text-6xl text-purple-600" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(0.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <RiTailwindCssFill className="text-6xl text-sky-500" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <DiJavascript1 className="text-6xl text-yellow-400" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <RiReactjsLine className="text-6xl text-sky-400" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <FaNodeJs className="text-6xl text-green-500" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <FaPython className="text-6xl text-sky-600" />
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-center my-16">UTILITIES</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <VscVscode className="text-6xl text-sky-600" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <FaGithub className="text-6xl text-neutral-300" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <CgFigma className="text-6xl text-purple-700" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <SiCanva className="text-6xl text-sky-500" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(0.5)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <RiNotionFill className="text-6xl text-neutral-300" />
            </div>
          </motion.div>
          <motion.div variants={iconVariants(0)} initial="initial" animate="animate" className="rounded-2xl p-1 bg-gradient-to-br from-pink-400 via-slate-500 to-purple-500">
            <div className="bg-slate-950 h-full w-full p-4 rounded-2xl">
              <RiOpenaiFill className="text-6xl text-neutral-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
