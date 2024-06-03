"use client";

import Lottie from "react-lottie";
import MailAnimation from "../../assets/Mail.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import "aos/dist/aos.css";
import Aos from "aos";
// ..
Aos.init({
  duration: 1000,
  easing: "ease in out",
});

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MailAnimation,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccj3o94",
        "template_6mg9zjb",
        form.current,
        "cJriKiLI2shzMWyDi"
      )
      .then(
        () => {
          toast.success("Thanks You so much for your response!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="py-20" id="contact">
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2" data-aos="fade-right">
          <Lottie options={defaultOptions} />
        </div>
        <div className="md:w-1/2 " data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-10 text-primary">
            Contact With Me
          </h1>
          <form ref={form} onSubmit={sendEmail} className="w-full" action="">
            <div className="mb-5">
              <label className="font-bold text-white" htmlFor="">
                Name
              </label>
              <input
                name="user_name"
                className=" w-full mt-2  px-5 py-2 text-slate-800 outline-primary focus:shadow-md focus:shadow-primary border-0 "
                type="text"
              />
            </div>
            <div className="mb-5">
              <label className="font-bold text-white" htmlFor="">
                Email
              </label>
              <input
                name="user_email"
                className="w-full mt-2  px-5 py-2 text-slate-800 outline-primary focus:shadow-md focus:shadow-primary border-0 "
                type="text"
              />
            </div>

            <div>
              <label className="font-bold text-white" htmlFor="">
                Message
              </label>
              <textarea
                className="w-full mb-5 outline-primary border-0 mt-2 px-5 py-2 text-slate-800"
                name="message"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white w-full text-lg font-normal rounded-sm"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
