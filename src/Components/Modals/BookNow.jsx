import React, { useContext, useState } from "react";
import "./booknow.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion } from "framer-motion";

const BookNow = ({ service }) => {
  const {
    serviceName,
    serviceImage,
    price,
    serviceArea,
    proName,
    proImage,
    proEmail,
  } = service;
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const userEmail = user?.email;
    const proImage = form.proImage.value;
    const proEmail = form.proEmail.value;
    const serviceDate = form.serviceDate.value;

    console.log(
      serviceName,
      serviceImage,
      price,
      serviceArea,
      userEmail,
      proImage,
      proEmail,
      serviceDate
    );

    const myNewService = {
      serviceName,
      serviceImage,
      price,
      serviceArea,
      userEmail,
      proImage,
      proEmail,
      serviceDate,
    };

    fetch("https://soul-fit-connect-server.vercel.app/myschedules", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myNewService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            position: "top-center",
            icon: "success",
            title: "Service Added Successfully",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
        }
      });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-white bg-gradient-to-r from-teal-200 to-teal-700  hover:bg-teal-950 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-none text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 btn-modal"
      >
        Book Now
      </button>

      {modal && (
        <div className="modal mt-16">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">
              Purchase a new service
            </h2>
            <form onSubmit={handleBooking}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type service name"
                    defaultValue={serviceName}
                    readOnly
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Service Image URL
                  </label>
                  <input
                    type="text"
                    name="serviceImage"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Service Image URL"
                    defaultValue={serviceImage}
                    readOnly
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Service Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    defaultValue={price}
                    readOnly
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    User's Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    readOnly
                    type="email"
                    name="userEmail"
                    placeholder="Type Provider Name"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Provider's Email
                  </label>
                  <input
                    defaultValue={proEmail}
                    readOnly
                    type="email"
                    name="proEmail"
                    id="item-weight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Providers email"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Provider's Image URL
                  </label>
                  <input
                    defaultValue={proImage}
                    readOnly
                    type="text"
                    name="proImage"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Providers image URL"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Service Area
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Service Area"
                    defaultValue={serviceArea}
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Service Taking date
                  </label>
                  <input
                    type="date"
                    name="serviceDate"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Provider Location"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-teal-600 p-4 bg-primary-700 rounded-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-teal-800"
              >
                Purchase This Service
              </button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNow;
