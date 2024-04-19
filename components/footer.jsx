import { Divider, Image, Link } from "@nextui-org/react";
import React from "react";
import SocialIcons from "./social-icons";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const Services = ["Consultation", "Development", "Design", "Support"];
  const Links = ["Home", "Services", "Benefits", "About", "Contact"];
  return (
    <footer>
      <div className="pt-20 pb-8 bg-blue grid gap-16 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1">
        <div className="flex-[1.5] flex flex-col items-start gap-4">
          {/* <Image src="/Images/logo.png" width={150} /> */}
          <h1 className="text-2xl font-extralight whitespace-nowrap">Flexore Group LTD</h1>
          <p className="text-sm font-extralight">
            Flexore Group LTD has a solution to all your IT problems. We are a
            team of skilled professionals with extensive experience in the field
            of digital marketing, hosting services and software development.
          </p>
          <div className="flex gap-6 mt-8">
            <SocialIcons />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold flex flex-col">Our Services</h2>
          {Services.map((service) => (
            <Link className="text-white font-extralight" href="#">
              {service}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h2 className="text-2xl font-semibold flex flex-col">Address</h2>
          <p className="text-sm">
            Know where to find us? Let's take a look and get in touch !
          </p>
          <div className="flex gap-4 items-center">
            <MapPin className="lg:w-12 sm:w-8" />
            <p className="text-xs font-extra-light">
              Nikolaou Nikolaidi, 10 Pittakeio Megaro, 3rd Floor, Office 305,
              8010, Paphos, Cyprus
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Phone size={20} />
            <p className="text-xs font-extra-light">+35799010241</p>
          </div>
          <div className="flex gap-4 items-center">
            <Mail size={20} />
            <p className="text-xs font-extra-light">info@flexoregroup.com</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold flex flex-col">Company</h2>
          {Links.map((link) => (
            <Link
              className="text-white font-extralight cursor-pointer"
              href={`#${link}`}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
      <Divider className="my-8" />
      <div className="flex justify-between pb-8 flex-col md:flex-row text-center gap-4">
        <p className="text-sm font-extralight ">
          Copyright © 2024 Flexore Group LTD. All Right reserved
        </p>
        <div className="flex gap-3 justify-center">
          <Link className="text-sm font-extralight text-white" href="#">
            Terms & Conditions
          </Link>
          <Divider orientation="vertical" className="h-full"/>
          <Link className="text-sm font-extralight text-white" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
