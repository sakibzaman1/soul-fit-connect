import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';

const AddServices = () => {

    const {user} = useContext(AuthContext);

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const price = form.price.value;
        const proName = user?.displayName;
        const proImage = user?.photoURL;
        const proEmail = user?.email;
        const description = form.description.value;
        // console.log(serviceName, serviceImage, price, proName, proImage, proEmail, description)

        const newService = {serviceName, serviceImage, price, proName, proImage, proEmail, description};
        console.log(newService);
         // send data to the server

         fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Added Successfully',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
            }
        })
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new service</h2>
      <form onSubmit={handleAddService}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
                  <input type="text" name="serviceName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type service name" required=""/>
              </div>
              <div className="w-full">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image URL</label>
                  <input type="text" name="serviceImage" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service Image URL" required=""/>
              </div>
              <div className="w-full">
                  <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div>
              <div className='sm:col-span-2'>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Name</label>
                  <input defaultValue={user?.displayName} readOnly type='text' name='proName' placeholder='Type Provider Name' id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  </input>
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Email</label>
                  <input defaultValue={user?.email} readOnly type="email" name="proEmail" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Providers email" required=""/>
              </div> 
              <div className="w-full">
                  <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider's Image URL</label>
                  <input defaultValue={user?.photoURL} readOnly type="text" name="providerImage" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Providers image URL" required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea name='description' id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-teal-600 p-4 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add product
          </button>
      </form>
  </div>
</section>
        </div>
    );
};

export default AddServices;