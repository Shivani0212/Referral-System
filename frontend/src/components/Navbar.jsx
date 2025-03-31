import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">Referral System</Link>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/dashboard" className="px-4">Dashboard</Link>
          <Link to="/referrals" className="px-4">Referrals</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
