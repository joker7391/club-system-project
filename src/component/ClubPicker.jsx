import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";
import { clubData } from "../assets/data";
import { firestore } from "../firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClubJoined from "./ClubJoined";
import ABMevents from "../CLUBjoinedContent/ABMevents";
import ARTESevents from "../CLUBjoinedContent/ARTESevents";
import COOKSevents from "../CLUBjoinedContent/COOKSevents";
import DMAevents from "../CLUBjoinedContent/DMAevents";
import HUMMSevents from "../CLUBjoinedContent/HUMMSevents";
import ITMAWEevents from "../CLUBjoinedContent/ITMAWEevents";
import YRCevents from "../CLUBjoinedContent/YRCevents";
import SSAevents from "../CLUBjoinedContent/SSAevents";
import STEMevents from "../CLUBjoinedContent/STEMevents";
import TOUSLEevents from "../CLUBjoinedContent/TOUSLEevents";
import SSACarousel from "../component/SsaCarousel";
import HUMMSCarousel from "../component/HummsCarousel";
import STEMCarousel from "../component/StemCarousel";
import YRCCarousel from "../component/YrcCarousel";
import ARTESCarousel from "../component/ArtesCarousel";
import ABMCarousel from "../component/AbmCarousel";
import ITMAWECarousel from "../component/ItmaweCarousel";
import COOKSCarousel from "../component/CooksCarousel";
import TOUSLECarousel from "../component/TousleCarousel";
import DMACarousel from "../component/DmaCarousel";

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
      toast.error("You need to be logged in to join a club.");
      return;
    }

    try {
      const userDoc = doc(firestore, "users", currentUser.uid);
      await setDoc(userDoc, { club: clubName }, { merge: true });
      setUserClub(clubName);
      toast.success(`You have successfully joined the ${clubName} club!`);
    } catch (error) {
      console.error("Error joining club: ", error);
      toast.error("Failed to join the club. Please try again.");
    }
  };

  const handleUnjoin = async () => {
    if (!currentUser) {
      toast.error("You need to be logged in to unjoin a club.");
      return;
    }

    try {
      const userDoc = doc(firestore, "users", currentUser.uid);
      await setDoc(userDoc, { club: "" }, { merge: true });
      setUserClub(null);
      toast.success("You have successfully left the club.");
    } catch (error) {
      console.error("Error leaving club: ", error);
      toast.error("Failed to leave the club. Please try again.");
    }
  };

  const clubComponent = {
    ABM: <ABMevents />,
    ARTES: <ARTESevents />,
    COOKS: <COOKSevents />,
    DMA: <DMAevents />,
    HUMMS: <HUMMSevents />,
    ITMAWE: <ITMAWEevents />,
    SSA: <SSAevents />,
    STEM: <STEMevents />,
    TOUSLE: <TOUSLEevents />,
    YRC: <YRCevents />,
  };

  const renderClubComponent = () => {
    try {
      return clubComponent[userClub] || null;
    } catch (error) {
      console.error("Error rendering club component: ", error);
      return null;
    }
  };

  const ClubCarousels = {
    SSA: <SSACarousel />,
    HUMMS: <HUMMSCarousel />,
    STEM: <STEMCarousel />,
    YRC: <YRCCarousel />,
    ARTES: <ARTESCarousel />,
    ABM: <ABMCarousel />,
    ITMAWE: <ITMAWECarousel />,
    COOKS: <COOKSCarousel />,
    TOUSLE: <TOUSLECarousel />,
    DMA: <DMACarousel />,
  };

  const renderClubCarousel = () => {
    try {
      return ClubCarousels[userClub] || null;
    } catch (error) {
      console.error("Error rendering club carousel: ", error);
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 px-10 py-20 w-full">
      <div className="w-full h-full">{renderClubCarousel()}</div>
      {userClub ? (
        <div className="gap-6 w-full">
          <div className="w-full h-full bg-blue-700 rounded-md py-4 flex flex-col items-center gap-2">
            <div className="w-[8em] h-[8em]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={clubData.find((club) => club.club === userClub)?.id}
                className="bg-yellow-400 rounded-full w-full h-full object-cover"
              />
            </div>
            <h1 className="text-[24px] text-[#fff] font-extrabold text-center py-2">
              {userClub}
            </h1>
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleVisit(userClub)}
                className="text-[#090612] text-[18px] font-bold bg-yellow-400 px-3 rounded-md"
              >
                Visit
              </motion.button>
            </div>
          </div>
          <div className="mt-6 w-full h-full">{renderClubComponent()}</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {clubData.map((club, index) => (
            <div
              key={index}
              className="w-full h-full bg-blue-700 rounded-md py-4 flex flex-col items-center gap-2 shadow-xl"
            >
              <div className="w-[6em] h-[6em]">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={club.id}
                  className="bg-yellow-400 rounded-full w-full h-full object-cover"
                />
              </div>
              <h1 className="text-[20px] text-[#fff] font-extrabold text-center py-2 underline">
                {club.club}
              </h1>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleJoin(club.club)}
                  className="text-[#090612] text-[16px] font-bold bg-yellow-400 px-2 rounded-md"
                >
                  Join
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVisit(club.club)}
                  className="text-[#090612] text-[16px] font-bold bg-yellow-400 px-2 rounded-md"
                >
                  Visit
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClubPicker;
