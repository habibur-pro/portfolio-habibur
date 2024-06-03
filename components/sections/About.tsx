"use client";
import photo from "@/assets/photo.jpg";
import { Link } from "react-scroll";
// import Resume from "@/assets/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
// ..
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
});
const About = () => {
  return (
    <div id="about me" className=" py-20 w-full">
      {/* <h1 className="text-4xl text-center font-bold">About Me</h1>
            <Underline lineLength={"200"} /> */}

      <div className="md:flex  w-full  gap-10">
        <div className="md:w-1/2" data-aos="fade-right">
          <Image className="w-full" src={photo} alt="" />
        </div>
        <div className="w-full mt-5 md:mt-0" data-aos="fade-top">
          <h1 className="text-5xl font-bold mb-3">About Me</h1>

          <h2 className="text-2xl font-bold mb-3 ">Front-End Developer</h2>
          <p className="text-justify">
            I am Habibur Rahman a Front-end Developer. I am parsing BSS at the
            National University of Bangladesh. I have proficiency in HTML, CSS,
            Javascript, React Js, Next Js, Node Js, Express Js, MongoDB, and
            many more. I have completed more than 20 projects including 2
            full-stack projects. I am a self-motivated and hard-working person.
            I am capable of writing clean and reusable code. I am qualified to
            adapt to new technology in a short time. As a web developer, my goal
            is to deliver outstanding web experiences that prioritize user
            satisfaction.
          </p>
          <button className="btn btn-primary mr-5 mt-5 text-white font-normal rounded-sm">
            {/* <a href={Resume} download>
              Download Resume
            </a> */}
            <a href="#" download>
              Download Resume
            </a>
          </button>
          <button className="btn btn-primary  text-white font-normal rounded-sm">
            <Link
              to="https://drive.google.com/file/d/1Uz6lbK-EAVjkkmnKl6euoPu6103D8mcp/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center"
            >
              Video
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
