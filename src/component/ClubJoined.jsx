import React from "react";

const ClubJoined = ({ clubName, events }) => {
  return (
    <div className="w-full h-full bg-[#c3aaaa1d] rounded-md py-4 flex flex-col items-center gap-4">
      <div>
        <h1 className="text-[20px] text-[#ffffff] font-extrabold text-center py-2">
          Welcome to the {clubName} Club!
        </h1>
      </div>
      <div className="w-full max-w-md bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold mb-2">Events</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event) => (
              <li key={event.id} className="mb-2 border-b pb-1">
                <p className="text-sm font-semibold">{event.type}</p>
                {event.date && (
                  <p className="text-xs text-gray-500">
                    Date: {event.date} {event.time && `| Time: ${event.time}`}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No upcoming events for this club.</p>
        )}
      </div>
    </div>
  );
};

export default ClubJoined;
