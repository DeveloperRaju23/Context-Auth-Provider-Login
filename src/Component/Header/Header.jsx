import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, currentUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between px-48 items-center h-20 bg-black text-white ">
      <h2 className="text-2xl">Portfolio</h2>
      {currentUser && (
        <nav className="flex gap-8 text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
      <div>
        {
           currentUser ? <>
             <button className="text-2xl mr-4 primary_btn">
            <Link to="/profile">Profile</Link>
          </button>  
            </> :
            <>
             <button className="text-2xl  primary_btn">
          <Link to="/login">Login</Link>
        </button>
            </>
        }
       
       
      </div>
    </div>
  );
};

export default Header;
