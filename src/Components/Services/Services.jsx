import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import { useState } from "react";

const Services = () => {
  const services = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const filteredServices = services.filter(filteredService=> filteredService.serviceName.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(filteredServices)

  const handleSearch = () => {
    console.log(searchValue);
    setSearchClicked(true);
    // setSearchValue("");

  };

  return (
    <div>
      <h1 className="text-4xl font-kalam my-10">Our Services</h1>
     <div className="my-10">
     <input
        className="border-gray-200 border-2 h-10 w-64 rounded-l-lg text-black pl-4"
        type="text"
        name=""
        id=""
        placeholder="   Search by Service Name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="rounded-r-lg h-10 w-24 bg-teal-500 text-white"
      >
        Search
      </button>
     </div>
      <div className="grid grid-cols-1 gap-6">
        {
          searchClicked? filteredServices.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          )) : 
          
          (
            services.length>0 && showMore? 
            services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
  
              
            )) :
            services.slice(0,6).map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
  
              
            ))

          )
        }
      </div>
      <div>
        {
          services.length > 6 && <button className="bg-gradient-to-r from-teal-500 to-teal-700 w-28 rounded-sm text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center mt-10 block mx-auto" onClick={()=> setShowMore(!showMore)}>{showMore? "See Less" : "See All"}</button>
        }
      </div>
    </div>
  );
};

export default Services;
