import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateService = () => {

    const {user} = useContext(AuthContext);

    const service = useLoaderData();

        const {
            _id,
            serviceName,
            serviceImage,
            price,
            serviceArea,
            proName,
            proImage,
            proEmail,
            providerLocation,
            description,
          } = service;


    const handleUpdateService = (e) => {

        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const price = form.price.value;
        const providerLocation = form.providerLocation.value;
        const serviceArea = form.serviceArea.value;
        const proName = user?.displayName;
        const proImage = user?.photoURL;
        const proEmail = user?.email;
        const description = form.description.value;
        // console.log(serviceName, serviceImage, price, proName, proImage, proEmail, description)

        const UpdatedService = {serviceName, serviceImage, price, proName, proImage, proEmail,providerLocation, serviceArea, description};
        console.log(UpdatedService);

        fetch(`https://soul-fit-connect-server.vercel.app/services/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdatedService)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount>0){
                swal("Updated!", "Your Service Has been updated", "success");
            }
        })
    }

    return (
        <div>
            <section className="bg-slate-200 dark:bg-gray-900 mt-10">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update service</h2>
      <form onSubmit={handleUpdateService}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
                  <input defaultValue={serviceName} type="text" name="serviceName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type service name" required=""/>
              </div>
              <div className="w-full">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image URL</label>
                  <input defaultValue={serviceImage} type="text" name="serviceImage" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service Image URL" required=""/>
              </div>
              <div className="w-full">
                  <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
                  <input defaultValue={price} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div>
              <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Name</label>
                  <input defaultValue={proName} readOnly type='text' name='proName' placeholder='Type Provider Name' id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  </input>
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Email</label>
                  <input defaultValue={proEmail} readOnly type="email" name="proEmail" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Providers email" required=""/>
              </div> 
              <div className="w-full">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Image URL</label>
                  <input defaultValue={proImage} readOnly type="text" name="providerImage" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Providers image URL" required=""/>
              </div>
              <div className="w-full">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Area</label>
                  <input defaultValue={serviceArea} type="text" name="serviceArea" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service Area" required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider Location</label>
                  <input defaultValue={providerLocation} type="text" name="providerLocation" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Provider Location" required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea defaultValue={description} name='description' id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-teal-600 p-4 bg-primary-700 rounded-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Update Service
          </button>
      </form>
  </div>
</section>
        </div>
    );
};

export default UpdateService;