import React from "react";
import Header from "../components/defaults/Header";
import Footer from "../components/defaults/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center p-4 bg-[#3AABA9]">
        <div className=" flex flex-col justify-center">
          <h3 className="text-white text-center text-5xl">
            Subscribe Our Newsletter
          </h3>
          <h2 className="text-white text-center text-lg">
            Subscribe to our newsletter to get regular update about our online
            medical sessions. Get latest news in your inbox
          </h2>
          <div className="input-field flex justify-between mt-6 lg:mb-0 mb-6 bg-[#fff] lg:w-[60%] rounded-xl px-4 py-3">
            <input
              type="text"
              placeholder="Your email"
              className="text-[#333] w-[100%] bg-transparent outline-none border-none "
            />
            <button className="bg-[#3aaba9] py-1 px-6 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
