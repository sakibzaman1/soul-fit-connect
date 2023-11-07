import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageServiceCard from './ManageServiceCard';

const ManageService = () => {

    const services = useLoaderData();

    return (
        <div>
            <h1 className='text-4xl font-kalam my-10'>Update Service</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    services.map(service=> <ManageServiceCard key={service._id} service={service}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;