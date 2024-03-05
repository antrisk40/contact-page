import React from "react";
import { ModeToggle } from "./ui/toggle-mode";

const NavigationBar = () => {
  return (
    <nav className="bg-red-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex space-x-6 items-center">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-red-300 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-red-300 transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-red-300 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-red-300 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center">
          <div className="text-white mr-6">
            <p className="font-semibold">Made by Neelesh</p>
            <p>Email: neeleshbaghel40@gmail.com</p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
