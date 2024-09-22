import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { firestore } from "../firebase.config";

const Notifications = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(firestore, "events"));
      const eventList = querySnapshot.docs.map((doc) => doc.data());
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="absolute top-[17px] right-[50px] flex flex-col gap-2 bg-[#fff] h-screen w-[20em] rounded-md z-50"
    >
      <h1 className="text-center text-[30px] font-bold bg-blue-600 text-[#fff] rounded-md">
        Notifications
      </h1>
      <div className="flex flex-col gap-4 p-3 overflow-y-auto max-h-[calc(100vh-100px)]">
        {events.map((event, index) => (
          <div key={index} className="bg-yellow-400 p-4 w-full rounded-md">
            <h2 className="font-bold">Event: {event.eventName}</h2>
            <p>Description: {event.eventDescription}</p>
            <p>Date: {event.eventDate}</p>
            <p>Time: {event.eventTime}</p>
            {event.flyerURL ? (
              <img
                src={event.flyerURL}
                alt="Event Flyer"
                className="mt-2 rounded-md"
              />
            ) : (
              <p className="text-red-500">No flyer available</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notifications;
