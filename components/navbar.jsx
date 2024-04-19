import React, { useState } from "react";
import {
  Navbar as NavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  Image,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Links = ["Home", "Services", "About", "Benefits", "Contact"];

  return (
    <NavBar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand className="justify-end sm:justify-start">
          {/* <Image src="Images/logo.png" alt="logo" className="h-16 mt-4" /> */}
          <h1 className="lg:text-3xl font-extralight text-lg md:text-2xl">Flexore Group LTD</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        {Links.map((link) => (
          <NavbarItem>
            <Link
              color="foreground"
              className="font-light hover:text-cyan-500 transition duration-100"
              href={`#${link}`}
            >
              {link}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-black">
        {Links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Get a Quote
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavBar>
  );
}
