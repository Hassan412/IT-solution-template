import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
  } from "lucide-react";
  import { Link } from "@nextui-org/react";
const SocialIcons = () => {
  return (
    <>
      <Link
        href="#"
        className="text-white transition-all hover:bg-[#FF705B] p-3 rounded-full"
      >
        <Facebook />
      </Link>
      <Link
        href="#"
        className="text-white transition-all hover:bg-[#FF705B] p-3 rounded-full"
      >
        <Twitter />
      </Link>
      <Link
        href="#"
        className="text-white transition-all hover:bg-[#FF705B] p-3 rounded-full"
      >
        <Instagram />
      </Link>
      <Link
        href="#"
        className="text-white transition-all hover:bg-[#FF705B] p-3 rounded-full"
      >
        <Linkedin />
      </Link>
    </>
  );
};

export default SocialIcons;
