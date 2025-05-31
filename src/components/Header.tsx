import Logo from "../assets/logo 1.png";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const Header = () => {
  return (
    <header className="flex items-center md:px-[20px] lg:px-[60px] md:py-[29px]">
      <Navbar className="flex-1 bg-white" fluid rounded>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo da Tira Visto" />

        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#">Home</NavbarLink>
          <NavbarLink href="#">Quem somos</NavbarLink>
          <NavbarLink href="#">Serviços</NavbarLink>
          <NavbarLink href="#">Contato</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};
