import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SingleService from '../../Components/Services/SingleService';

const MyServices = () => {

    const { user } = useContext(AuthContext);

  const services = useLoaderData();
  const myAddedServices = services.filter(
    (filteredService) => filteredService.proEmail === user?.email
  );
  const [myCurrentServices, setMyCurrentServices] = useState(myAddedServices);


    return (
        <div>
      <Helmet>
        <title>SFC | My Services</title>
      </Helmet>
      <h1 className="text-4xl font-kalam my-10">My Services</h1>
      {
        myCurrentServices.length>0? 

        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-4">
        {myCurrentServices.map((service) => (
          <SingleService
            key={service._id}
            service={service}
          ></SingleService>
        ))}
      </div> :

        <h1 className='text-2xl text-red-600'>No Service Available</h1>

      }
    </div>
    );
};

export default MyServices;