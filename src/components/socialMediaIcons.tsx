import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

function SocialMediaIcons() {
  return (
    <div className="flex gap-4">
      <Facebook
        size={17}
        className="text-white hover:opacity-45 hover:cursor-pointer transition "
      />
      <Instagram
        size={17}
        className="text-white hover:opacity-45 hover:cursor-pointer transition"
      />
      <Twitter
        size={17}
        className="text-white hover:opacity-45 hover:cursor-pointer transition"
      />
      <Linkedin
        size={17}
        className="text-white hover:opacity-45 hover:cursor-pointer transition"
      />
      <Youtube
        size={17}
        className="text-white hover:opacity-45 hover:cursor-pointer transition"
      />
    </div>
  );
}

export default SocialMediaIcons;
