import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext"; // Make sure the path is correct
import { clubData } from "../assets/data"; // Make sure the path is correct
import { firestore } from "../firebase.config"; // Make sure the path is correct

const ClubPicker = () => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const [userClub, setUserClub] = useState(null);

  useEffect(() => {
    if (userData) {
      setUserClub(userData.club);
    }
  }, [userData]);

  const handleVisit = (clubName) => {
    navigate(`/${clubName.toLowerCase()}`);
  };

  const handleJoin = async (clubName) => {
    if (!currentUser) {
      alert("You need to be logged in to join a club.");
      return;
    }

    try {
      const userDoc = doc(firestore, "users", currentUser.uid);
      await setDoc(userDoc, { club: clubName }, { merge: true });
      setUserClub(clubName);
      alert(`You have successfully joined the ${clubName} club!`);
    } catch (error) {
      console.error("Error joining club: ", error);
      alert("Failed to join the club. Please try again.");
    }
  };

  const handleUnjoin = async () => {
    if (!currentUser) {
      alert("You need to be logged in to unjoin a club.");
      return;
    }

    try {
      const userDoc = doc(firestore, "users", currentUser.uid);
      await setDoc(userDoc, { club: "" }, { merge: true });
      setUserClub(null);
      alert("You have successfully left the club.");
    } catch (error) {
      console.error("Error leaving club: ", error);
      alert("Failed to leave the club. Please try again.");
    }
  };

  return (
    <div className="flex flex-wrap gap-12 p-24 w-[80em]">
      {userClub ? (
        <div className="w-[20em] h-[18em] bg-blue-700 rounded-md py-6 flex flex-col items-center gap-2">
          <div className="w-[8em]">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={clubData.find((club) => club.club === userClub)?.id}
              className="bg-yellow-400 rounded-full w-full"
            />
            <h1 className="text-[30px] text-[#fff] font-extrabold text-center py-3 underline">
              {userClub}
            </h1>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleVisit(userClub)}
              className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
            >
              Visit
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleUnjoin}
              className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
            >
              Leave
            </motion.button>
          </div>
        </div>
      ) : (
        clubData.map((club, index) => (
          <div
            key={index}
            className="w-[20em] h-[18em] bg-blue-700 rounded-md py-6 flex flex-col items-center gap-2"
          >
            <div className="w-[8em]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={club.id}
                className="bg-yellow-400 rounded-full w-full"
              />
              <h1 className="text-[30px] text-[#fff] font-extrabold text-center py-3 underline">
                {club.club}
              </h1>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleJoin(club.club)}
                className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
              >
                Join
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleVisit(club.club)}
                className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
              >
                Visit
              </motion.button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ClubPicker;
