import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-row-reverse justify-between items-center">
      <Helmet>
        <title>SFC | Contact</title>
      </Helmet>
      <img
        className="w-1/2"
        src="https://i.ibb.co/cXFNP7Z/Soul-Fit-Connect-horizontal-logo-removebg-preview.png"
        alt=""
      />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-teal-700">Contact Us</h1>
          <p className="text-lg text-gray-800 mt-4">
            Have questions or need assistance? Feel free to reach out to us.
          </p>

          <form className="mt-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
            </div>
           <Link>
           <button
           disabled
              type="submit"
              className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800"
            >
              Submit
            </button>
           </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
