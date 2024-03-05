import React, { useState } from "react";
import { ModeToggle } from "./ui/toggle-mode.jsx";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-red-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white mr-6">
        <p className="font-semibold">Made by Neelesh</p>
        <p>Email: neeleshbaghel40@gmail.com</p>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavigationBar;
