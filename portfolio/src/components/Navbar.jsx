import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from "@nextui-org/react";
import carl from '../assets/LOGO.png';
import { Link } from 'react-router-dom';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "PROJECTS", link: "/projects" },
    { title: "HOME", link: "/" }
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={carl} className="w-10 h-10" alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src={carl} className="w-40 h-50" alt="logo" />
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`} isActive>
            <Link
              to={item.link}
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
              onClick={() => setIsMenuOpen(false)} // Close the menu on link click
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              to={item.link}
              onClick={() => setIsMenuOpen(false)} // Close the menu on link click
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
