import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT<span className="text-gray-700 font-medium"> US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-[200px] max-w-[360px] md:w-[300px] md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est cum
            rem non pariatur optio nihil vitae aspernatur modi reprehenderit!
            Unde placeat tempore repellendus aspernatur, dolore sapiente
            repudiandae suscipit exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            officiis quaerat vero ad? Cum repellendus fugit quidem odit natus
            molestiae distinctio aperiam dicta dolor asperiores quae rem impedit
            a, voluptate laboriosam amet porro eligendi! Quam sapiente
            consequuntur totam magnam veritatis.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rem
            atque ea, commodi architecto rerum obcaecati unde nam quis eligendi!
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>Streamlined Appointment Scheduling that fit into your busy lifestyle</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVINIENCE</b>
          <p>Access to a network of Trusted Healthcare Professional in your Area</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALISATION</b>
          <p>Tailored recommendation Remainders To Help you Stay on the Top of Health</p>
        </div>
      </div>

    </div>
  );
};

export default About;
