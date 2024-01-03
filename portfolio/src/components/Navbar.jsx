import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import carl from '../assets/LOGO.png'
import { Link } from 'react-router-dom';



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
        "PROJECTS",
        "RESUME",
        "HOME"
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

        <NavbarItem isActive>
          <Link
            to="/projects" // Specify the route for Projects component
            color="foreground"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <Link
            to="/" // Specify the route for Projects component
            color="foreground"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <Link color="foreground" href="#" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            RESUME
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
