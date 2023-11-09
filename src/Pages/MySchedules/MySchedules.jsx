import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import MySchedulesCard from "./MySchedulesCard";
import MyPendingCard from "./MyPendingCard";
import { Helmet } from "react-helmet-async";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myActualPending, setMyActualPending] = useState([]);

  const mySchedules = useLoaderData();
  const myBookings = mySchedules.filter(
    (myBooking) => myBooking.userEmail === user?.email
  );
  // console.log("My Bookings : ", myBookings);
  const myPendingWorks = mySchedules.filter(
    (myPendingWork) => myPendingWork.userEmail !== user?.email
  );
  // console.log("pending : ", myPendingWorks);

  useEffect(()=>{
    fetch(`https://soul-fit-connect-server.vercel.app/services`)
    .then(res=>res.json())
    .then(data=> {
      const finalPending = myPendingWorks.filter(pending=> pending.proEmail === user?.email);
      setMyActualPending(finalPending);
      
    })
  },[]);

  // console.log(myActualPending)

  return (
    <div>
      <Helmet>
        <title>SFC | My Schedules</title>
      </Helmet>
      {/* My Bookings */}
      <section>
        <h1 className="text-4xl font-kalam my-10">My Bookings</h1>
        {myBookings.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-6">
            {myBookings.map((myBooking) => (
              <MySchedulesCard
                key={myBooking._id}
                myBooking={myBooking}
              ></MySchedulesCard>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl text-red-600">Nothing Added Yet </h1>
        )}
      </section>

      <div className="border-b-4 border-slate-500 mt-10">
        <hr />
      </div>

      {/* My Pending Works */}
      <section>
        <h1 className="text-4xl font-kalam my-10">My Pending Works</h1>
        {myPendingWorks.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-6">
            {myActualPending.map((myPendingWork) => (
              <MyPendingCard
                key={myPendingWork._id}
                myPendingWork={myPendingWork}
              ></MyPendingCard>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl text-red-600">Nothing Yet </h1>
        )}
      </section>
    </div>
  );
};

export default MySchedules;
