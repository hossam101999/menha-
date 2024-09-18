import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

const Sidebar = ({ image, name }) => {
  return (
    <div className="p-6 rounded-lg text-white bg-gradient-to-b from-[#003a65] to-[#000]">
      <div className="text-center mb-4">
        {image && (
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
          />
        )}
        <FaGraduationCap className="mx-auto text-4xl mb-2" />
        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        
        <div className="mt-6 space-y-2">
          <Link to="/profile/profileinfo" className="block py-2 text-white hover:text-gray-300">Profile Info</Link>
          <Link to="/profile/password" className="block py-2 text-white hover:text-gray-300">Change Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;