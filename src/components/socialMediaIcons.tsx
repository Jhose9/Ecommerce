import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const BaseClass = "text-white hover:opacity-45 hover:cursor-pointer transition";
function SocialMediaIcons({ className }: { className?: string }) {
  return (
    <div className="flex gap-4">
      <Facebook size={17} className={cn(BaseClass, className)} />
      <Instagram size={17} className={cn(BaseClass, className)} />
      <Twitter size={17} className={cn(BaseClass, className)} />
      <Linkedin size={17} className={cn(BaseClass, className)} />
      <Youtube size={17} className={cn(BaseClass, className)} />
    </div>
  );
}

export default SocialMediaIcons;
