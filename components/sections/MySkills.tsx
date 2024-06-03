"use client";
import htmlLogo from "@/assets/logo/html_logo.png";
import cssLogo from "@/assets/logo/css_logo.png";
import javascriptLogo from "@/assets/logo/javascript_logo.png";
import reactLogo from "@/assets/logo/react_logo.png";
import bootstrapLogo from "@/assets/logo/bootstrap_logo.png";
import tailwindLogo from "@/assets/logo/tailwind_logo.png";
import nodeLogo from "@/assets/logo/node_logo.png";
import expressLogo from "@/assets/logo/express_logo.png";
import mongodbLogo from "@/assets/logo/mongodb_logo.png";
import firebaseLogo from "@/assets/logo/firebase_logo.png";
import nextLogo from "@/assets/logo/next_logo.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Underline from "../ui/Underline";
import Image from "next/image";
// ..
Aos.init({
  duration: 1000,
  easing: "ease-in-out",
});

const MySkills = () => {
  return (
    <div id="skills" className="my-20" data-aos="fade-up">
      <h1 className="text-center text-5xl font-bold ">My Skills</h1>
      <Underline />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={htmlLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">HTML</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={cssLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">CSS</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={javascriptLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Javascript</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={bootstrapLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Bootstrap</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={tailwindLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">TailwindCss</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={reactLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">ReactJs</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={nodeLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Node Js</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={expressLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Express Js</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={mongodbLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">MongoDB</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={firebaseLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Firebase</h3>
        </div>
        <div className="flex gap-2 items-center border border-primary hover:-translate-y-2 hover:duration-300 hover:bg-primary px-5 py-3">
          <Image className="w-12" src={nextLogo} alt="" />
          <h3 className="md:text-xl font-bold text-white">Next Js</h3>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
