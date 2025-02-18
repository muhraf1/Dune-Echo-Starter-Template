import React from "react";
import WalletSelect from "./ui/walletselect"; // Assuming this is correct
import Content from "./contentchart"; // Updated path
import Navbar from "./menu/navbar"; // Updated path
import WalletProvider, { useWalletContext } from "./context/walletcontext"; // Updated path

const BaseLayer = ({ children }) => {
  return (

      <div className="flex items-center justify-between">
        {/* main cards */}
        <div className="custom-width mx-auto h-full glass px-10 pb-3">
          <WalletSelect />
          <Content />
          {children}  {/* Here's where we add the children */}
          <div className="w-full flex justify-between my-2 px-2">
          <img className="h-8 w-auto" src="./src/assets/Dune_Echo.svg" />
            <img className="h-8 w-auto" src="./src/assets/name_logo.png" />
          </div>
        </div>
      </div>

  );
};

export default BaseLayer;