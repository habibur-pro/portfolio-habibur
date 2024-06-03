"use client";

import artZone from "@/assets/images/artzone.png";
import tinyCar from "@/assets/images/tinyCar.png";
import SuperChefs from "@/assets/images/SuperChefs.png";
import adminPanel from "@/assets/images/adminPanel.png";
import Underline from "../ui/Underline";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <Underline />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* project 1  */}
        <div className="group relative">
          <div
            className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
            style={{ backgroundImage: `url(${artZone})` }}
          ></div>
          <div className="p-3 bg-secondary ">
            <h3 className="text-primary text-xl font-bold">ArtZone</h3>
            <p className="text-sm mb-3 ">
              A full stack art learning website. Students can buy and teachers
              cant add,update,delete class. It has secure login system, payment
              system, role based dashboard etc.{" "}
            </p>
            <div className="flex flex-wrap gap-2">
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Html
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Css
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Javascript
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                TailwindCss
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                React
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Node Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Express Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                MongoDB
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Firebase
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Stripe Payment
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Jwt
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Axios
              </p>
            </div>
            <hr className="my-2" />
            <div className="my-3 flex justify-between ">
              <button className="btn btn-accent  text-white btn-sm">
                <Link href="https://artzone-be3a9.web.app/" target="_blank">
                  Live site
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/artZone-client"
                  target="_blank"
                >
                  Client
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/artZone-server"
                  target="_blank"
                >
                  Server
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* project 2  */}
        <div className="group relative">
          <div
            className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
            style={{ backgroundImage: `url(${tinyCar})` }}
          ></div>
          <div className="p-3 bg-secondary">
            <h3 className="text-primary text-xl font-bold">TinyCar</h3>
            <p className="text-md mb-3 text-sm">
              A toy marketplace. User can select Add, update, and delete his own
              toys. Implemented secure login, search and sorting system. Shows
              toys by category.{" "}
            </p>
            <div className="flex flex-wrap gap-2">
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Html
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Css
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Javascript
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                TailwindCss
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                React
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Node Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Express Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                MongoDB
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Firebase
              </p>
            </div>
            <hr className="my-2" />
            <div className="my-3 flex justify-between">
              <button className="btn btn-accent  text-white btn-sm">
                <Link
                  href="https://tiny-car-assignment-11.web.app/"
                  target="_blank"
                >
                  Live site
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/tiny-car-client"
                  target="_blank"
                >
                  Client
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/tiny-car-server"
                  target="_blank"
                >
                  Server
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* project 3  */}
        <div className="group relative">
          <div
            className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
            style={{ backgroundImage: `url(${SuperChefs})` }}
          ></div>
          <div className="p-3 bg-secondary ">
            <h3 className="text-primary text-xl font-bold">Super Chefs</h3>
            <p className="text-md mb-3 text-sm">
              A recipe sharing website. This website responsive for all devices.
              A user can see recipes and select chosen recipes. selected recipe
              saved in local storage.{" "}
            </p>
            <div className="flex flex-wrap gap-2">
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Html
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Css
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Javascript
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                TailwindCss
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Lazy Loader
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Swiper
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                React
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Node Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Express Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Firebase
              </p>
            </div>
            <hr className="my-2" />
            <div className="my-3 flex justify-between">
              <button className="btn btn-accent  text-white btn-sm">
                <Link
                  href="https://simple-firebase-recap-3188a.web.app/"
                  target="_blank"
                >
                  Live site
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/super-chef-s-client"
                  target="_blank"
                >
                  Client
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/super-chef-s-server"
                  target="_blank"
                >
                  Server
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* project 4  */}
        <div className="group relative">
          <div
            className=" h-[300px] bg-no-repeat ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
            style={{
              backgroundImage: `url(${adminPanel})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
          <div className="p-3 bg-secondary ">
            <h3 className="text-primary text-xl font-bold">Dashboard</h3>
            <p className="text-md mb-3 text-sm">
              Dashboard menu changed by user role. Secure from unAuthorize user.
              user, teacher or admin can not access to other user data.
              <br />{" "}
              <span className="text-warning font-bold">
                Admin Email: admin@gmail.com <br /> Password: #@Admin
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Html
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Css
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Javascript
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                TailwindCss
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                React
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Node Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Express Js
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                MongoDB
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Firebase
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Stripe Payment
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                Axios
              </p>
              <p className="bg-primary text-xs px-3 py-1 rounded-full text-white ">
                JWT
              </p>
            </div>
            <hr className="my-2" />
            <div className="my-3 flex justify-between">
              <button className="btn btn-accent  text-white btn-sm">
                <Link
                  href="https://artzone-be3a9.web.app/dashboard/manage_classes"
                  target="_blank"
                >
                  Live site
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/artZone-client"
                  target="_blank"
                >
                  Client
                </Link>
              </button>
              <button className="btn btn-accent text-white btn-sm">
                <Link
                  href="https://github.com/habibur-pro/artZone-server"
                  target="_blank"
                >
                  Server
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
