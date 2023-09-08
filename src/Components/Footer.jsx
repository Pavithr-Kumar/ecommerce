import React from "react";
import "./Navbar.css";
function Footer() {
  return (
    <footer className="bg-slate-200 pt-7 pb-16 px-14 mt-10">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl text-emerald-500 font-bold ml-28 mb-10 cursor-pointer"
      >
        ShopMe
      </h1>
      <div className="grid grid-cols-3 w-10/12 mx-auto">
        <div className="flex flex-col gap-4">
          <h1>
            <strong>Contact</strong>
          </h1>
          <p>
            <strong>Address:</strong>765 Washington,Street 14
          </p>
          <p>
            <strong>Phone:</strong>+1 233-342-42/(+91) 7095182553
          </p>
          <p>
            <strong>Hours:</strong>10:00 - 17:30, Mon-Fri
          </p>
        </div>
        <div id="foot" className="flex flex-col gap-4 pl-11">
          <h1>
            <strong>About</strong>
          </h1>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div id="foot" className="flex flex-col gap-4">
          <h1>
            <strong>My Account</strong>
          </h1>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>Help</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
