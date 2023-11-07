import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ManageServiceCard from "./ManageServiceCard";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageService = () => {
  const { user } = useContext(AuthContext);

  const services = useLoaderData();
  const myAddedServices = services.filter(
    (filteredService) => filteredService.proEmail === user?.email
  );
  const [myCurrentServices, setMyCurrentServices] = useState(myAddedServices);

  return (
    <div>
      <h1 className="text-4xl font-kalam my-10">Update Service</h1>
      {
        myCurrentServices.length>0? 

        <div className="grid grid-cols-2 gap-4">
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
