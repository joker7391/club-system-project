import React, { useEffect, useState } from "react";
import { firestore } from "../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";

const COOKSevents = () => {
  const [clubEvents, setClubEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCOOKSClubEvents = async () => {
      setLoading(true);
      setError(null); // Reset any previous errors
      try {
        const eventsCollection = collection(firestore, "events");
        const cooksClubQuery = query(
          eventsCollection,
          where("club", "==", "3")
        );
        const eventsSnapshot = await getDocs(cooksClubQuery);

        const eventsList = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setClubEvents(eventsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching COOKS Club events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      }
    };

    fetchCOOKSClubEvents();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 lg:px-0">
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading events...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : clubEvents.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          No events available for COOKS Club.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {event.eventImage && (
                <img
                  src={event.eventImage}
                  alt={event.eventName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <h3 className="text-2xl font-semibold text-blue-600">
                {event.eventName}
              </h3>

              <p className="text-gray-600 mt-2">
                <span className="font-bold">Date:</span> {event.eventDate}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Time:</span> {event.eventTime}
              </p>

              <p className="text-gray-600 mt-4">{event.eventDescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default COOKSevents;
