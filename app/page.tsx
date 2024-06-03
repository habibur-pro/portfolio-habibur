import Sidebar from "@/components/sections/Sidebar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import MySkills from "@/components/sections/MySkills";
import MyProjects from "@/components/sections/MyProjects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MenuItem from "@/components/ui/MenuItem";

const Page = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto ">
        <div className="text-3xl text-white md:hidden w-full fixed z-10 bg-base-100 ">
          <MenuItem />
        </div>
        <div className="md:grid grid-cols-6 px-3 md:px-0 relative">
          <div className="md:col-span-1 z-50">
            <Sidebar />
          </div>
          <div className="md:col-span-5  md:px-10">
            <Home />
            <About />
            <MySkills />
            <MyProjects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
