import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen flex justify-between items-center p-6">
      <Helmet>
        <title>SFC | About</title>
      </Helmet>
      <img
        className="w-1/2"
        src="https://i.ibb.co/DbM1DyM/Soul-fit-connect-logo-removebg-preview.png"
        alt=""
      />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-10 text-teal-700">
            About Soul Fit Connect
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Welcome to Soul Fit Connect, your trusted partner on your fitness
            journey. We are committed to helping you achieve a healthier and
            more fulfilling lifestyle. Our team of fitness experts provides
            top-notch guidance and resources to help you reach your wellness
            goals.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Our mission is to empower you with the knowledge and tools to make
            lasting, positive changes in your life. Whether you're a seasoned
            fitness enthusiast or just beginning your fitness adventure, we
            offer a wide range of fitness guidelines, personalized workout
            plans, nutrition insights, and a thriving community to keep you
            motivated and inspired.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            At Soul Fit Connect, we believe that fitness goes beyond physical
            health; it encompasses mental well-being and inner harmony. We're
            here to guide you on a journey to reconnect with your inner self and
            discover the best version of yourself.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Join our vibrant community today and embark on your path to a
            healthier, happier you. Together, we can achieve fitness, wellness,
            and a deep, soulful connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/*



*/
