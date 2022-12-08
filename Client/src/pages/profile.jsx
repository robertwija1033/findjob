import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/general/Footer";
import EditedProfile from "../components/profile/EditedProfile";

const Profile = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#1A39B6] flex justify-center py-5">
      <h1 className="text-4xl sm:text-2xl font-bold text-[#E5E5E5]">Profile</h1>
      <EditedProfile />
      <Footer />
    </div>
  );
};

export default Profile;
