"use client";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Home from "./components/Home/Home";
// import MyProjects from "./components/MyProjects/MyProjects";
// import MySkills from "./components/MySkills/MySkills";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { useState } from "react";
// import Footer from "./components/Footer/Footer";
import { pages } from "next/dist/build/templates/app-page";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/sections/Sidebar";

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleSidebar = (value) => {
    setOpen(value);
  };
  return (
    <>
      <div className="max-w-[1500px] mx-auto ">
        <div className="text-3xl text-white md:hidden w-full fixed z-10 bg-base-100 ">
          <Menu
            onClick={() => handleSidebar(!open)}
            className={`absolute  right-10  ${open ? "text-primary" : ""}`}
          />
        </div>
        <div className="md:grid grid-cols-6 px-3 md:px-0 relative">
          <div className="md:col-span-1 z-50">
            <Sidebar open={open} setOpen={setOpen}></Sidebar>
          </div>
          <div className="md:col-span-5  md:px-10">
            {/* <Home />
            <About />
            <MySkills />
            <MyProjects />
            <Contact />
            <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
