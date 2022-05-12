import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
} from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  StyledLink,
  LogoLink,
  SearchBar,
} from "./Navbar.elements";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLogged, SetIdLogged] = useState(true);

  const handleMenuClicked = () =>{
    setShowMobileMenu(!showMobileMenu)
    {document.body.style.overflow='hidden'}
  };

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoLink to="/">
            <LogoContainer>
              <GiCook />
              <p>Star</p>
              <p>Woks</p>
            </LogoContainer>
          </LogoLink>

          <SearchBar>
            <p></p>
          </SearchBar>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <StyledLink to="/">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaHome />
                    Inicio
                  </div>
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/my_recepies">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaUserAlt />
                    Mis Recetas
                  </div>
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/upload_recepies">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaBriefcase />
                    Subir Recetas
                  </div>
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/profile">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <GiCook />
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/login">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  {isLogged ? <RiLogoutBoxRLine /> : <BsFillPersonPlusFill />}
                </MenuItemLink>
              </StyledLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
