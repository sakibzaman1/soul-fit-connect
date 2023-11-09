import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookNow from "../Modals/BookNow";
import { Helmet } from "react-helmet-async";
import SingleService from "./SingleService";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const [otherServices, setOtherServices] = useState([]);
  const service = useLoaderData();
  //   console.log(service);

  const {
    _id,
    serviceName,
    serviceImage,
    price,
    serviceArea,
    providerLocation,
    proName,
    proImage,
    proEmail,
    description,
  } = service;

  useEffect(() => {
    fetch(`https://soul-fit-connect-server.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filteredServices = data.filter((service) => service._id !== _id);
        // console.log(filteredServices)
        setOtherServices(filteredServices);
      });
  }, []);

  // console.log(otherServices)

  return (
    <div>
      <Helmet>
        <title>SFC | Service Details</title>
      </Helmet>
      <h1 className="text-4xl font-kalam my-10">
        Service details of -{" "}
        <span className="font-josefinSans text-teal-600">{serviceName}</span>
      </h1>
      <motion.div
        animate={{ scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="mt-10 w-full bg-slate-200 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 space-y-6 p-6 shadow-xl"
      >
        <a>
          <img
            className="p-8 rounded-t-lg"
            src={serviceImage}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              {serviceName}
            </h5>
          </a>
          <div>
            <p className="mb-10">{description}</p>
          </div>
          <div className="my-6">
            <span>Service Area : {serviceArea}</span>
          </div>
          <div className="flex items-center justify-center space-x-10 mb-6">
            <h1 className="text-lg font-semibold font-kalam">
              Service Provider ~{" "}
            </h1>
            <div className="">
              <img
                className="w-8 h-8 rounded-full"
                src={proImage}
                alt="Neil image"
              />
            </div>
            <div className="">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {proName}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {proEmail}
              </p>
            </div>
            <div>
              <p>Location: {providerLocation}</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2.5 mb-10 flex-grow">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white mt-24">
              <span className="font-kalam">Price</span> : ${" "}
              <span className="text-red-600">{price}</span>
            </span>

            <div>
              <BookNow service={service}></BookNow>
            </div>
          </div>
        </div>
      </motion.div>
      <hr className="my-20 border-2" />
      {/* All other services */}
      <div>
        <h1 className="text-4xl font-kalam my-10">Other Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-4 lg:space-y-0">
          {otherServices.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
