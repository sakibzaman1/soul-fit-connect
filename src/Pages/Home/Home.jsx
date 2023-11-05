import React from "react";
import Header from "../../Components/Header/Header";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import Video from "../../Components/ExtraSections/Video";
import SingleService from "../../Components/Services/SingleService";

const Home = () => {

  const services = useLoaderData();
  const {serviceName, serviceImage, price, proName, proImage, proEmail, description} = services;

  return (
    <div>
      <div className="relative mt-10">
        <div className="mt-10 flex items-center h-10 absolute top-0 right-0 left-0 vertical-marquee">
          <Marquee className="text-9xl mt-8 ml-6 text-white">
            <p className="pl-4 border-r-2">
              "Fitness is not about being better than someone else; it's about
              being better than you used to be." - Unknown
            </p>

            <p className="pr-4 border-r-2">
              "The only bad workout is the one that didn't happen." - Unknown
            </p>

            <p className="pr-4 border-r-2">
              "Don't wish for a good body; work for it." - Unknown
            </p>

            <p>"The body achieves what the mind believes." - Unknown</p>

            <p className="pr-4 border-r-2">
              "Your body can stand almost anything. It's your mind that you have
              to convince." - Unknown
            </p>

            <p className="pr-4 border-r-2">
              "The pain you feel today will be the strength you feel tomorrow."
              - Unknown
            </p>

            <p className="pr-4 border-r-2">
              "Sweat is just fat crying." - Unknown
            </p>
          </Marquee>
        </div>
        <div>
          <Video></Video>
        </div>
        <div>
          <h1 className="text-4xl font-kalam my-10">Our Services</h1>
          <div className="grid grid-cols-2 gap-6">
          {
            services.map(service=> <SingleService key={service.id} service={service}></SingleService>)
          }
          </div>
        </div>
      </div>
      <div>
        <Header></Header>
      </div>
    </div>
  );
};

export default Home;
