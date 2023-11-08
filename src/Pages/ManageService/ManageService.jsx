import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ManageServiceCard from "./ManageServiceCard";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useContext(AuthContext);

  const services = useLoaderData();
  const myAddedServices = services.filter(
    (filteredService) => filteredService.proEmail === user?.email
  );
  const [myCurrentServices, setMyCurrentServices] = useState(myAddedServices);

  return (
    <div>
      <Helmet>
        <title>SFC | Manage Service</title>
      </Helmet>
      <h1 className="text-4xl font-kalam my-10">Update Service</h1>
      {
        myCurrentServices.length>0? 

        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-4">
        {myCurrentServices.map((service) => (
          <ManageServiceCard
            key={service._id}
            service={service}
            myCurrentServices={myCurrentServices}
            setMyCurrentServices={setMyCurrentServices}
          ></ManageServiceCard>
        ))}
      </div> :

        <h1 className='text-2xl text-red-600'>No Service Available</h1>

      }
    </div>
  );
};

export default ManageService;
