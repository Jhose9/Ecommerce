import React from "react";
import SocialMediaIcons from "./socialMediaIcons";

function InfoBar() {
  return (
    <div className="h-10 bg-black  grid-cols-2 hidden lg:grid">
      <div className="flex h-full pl-14 xl:pl-32 gap-3 items-center">
        <p className="text-white text-sm hover:opacity-45 hover:cursor-pointer transition ">
          Canal J&B podcast
        </p>
        <div className="border-l h-6 border-gray-500"></div>
        <p className="text-white text-sm hover:opacity-45 hover:cursor-pointer transition ">
          Canal de J&B
        </p>
      </div>

      <div className="flex h-full items-center justify-end pr-14 xl:pr-32 gap-3">
        <SocialMediaIcons />
        <div className="border-l h-6 border-gray-500"></div>
        <a
          className="text-white text-sm hover:opacity-45 transition"
          href="/contacto"
        >
          Contacto
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
