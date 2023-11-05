import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {

    const services = useLoaderData();

    return (
        <div>
        <h1 className="text-4xl font-kalam my-10">Our Services</h1>
        <div className="grid grid-cols-1 gap-6">
        {
          services.map(service=> <SingleService key={service.id} service={service}></SingleService>)
        }
        </div>
      </div>
    );
};

export default Services;