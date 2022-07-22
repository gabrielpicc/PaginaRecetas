import React, { useState, useEffect } from "react";
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
import { GoSearch } from "react-icons/go";
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
import JSONDATA from "./recetas.json";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLogged, SetIdLogged] = useState(true);

  const handleClickEvent = () => {
    setShowMobileMenu(!showMobileMenu);
    localStorage.clear("telefono");
    localStorage.clear("nombre");
    localStorage.clear("id");
    localStorage.clear("email");
    localStorage.clear("apellido");
  };

  const [searchTerm, setSearchTerm] = useState("");

  return JSON.parse(localStorage.getItem("email") !== null) ? (
    <Container open={showMobileMenu}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoLink to="/">
            <LogoContainer>
              <GiCook />
              <p>Star</p>
              <p>Woks</p>
            </LogoContainer>
          </LogoLink>

          <div>
            <SearchBar>
              <input
                type="text"
                placeholder="Busqueda"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                  -1
                ) {
                  return val;
                }
              }).map((val, key) => {
                //return console.log("");
              })}
            </SearchBar>
          </div>
          <div>
            <StyledLink className="busqueda" to="/search">
              <LogoContainer /* onClick={() => setShowMobileMenu(!showMobileMenu)} */
              >
                <GoSearch />
              </LogoContainer>
            </StyledLink>
          </div>
          <MobileIcon
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              if (!showMobileMenu) {
                document.getElementsByTagName("html")[0].style.overflow =
                  "hidden";
              } else {
                document.getElementsByTagName("html")[0].style.overflow =
                  "auto";
              }
            }}
          >
            {showMobileMenu ? (
              <FaTimes className="FaItem" />
            ) : (
              <FaBars className="FaItem" />
            )}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <StyledLink to="/">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaHome />
                    Inicio
                  </div>
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink
                to={{ pathname: `/my_recepies/${localStorage.getItem("id")}` }}
              >
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
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
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <GiCook />
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/login">
                <MenuItemLink onClick={handleClickEvent}>
                  <RiLogoutBoxRLine />
                </MenuItemLink>
              </StyledLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  ) : (
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

          <div>
            <SearchBar>
              <input
                type="text"
                placeholder="Busqueda"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                  -1
                ) {
                  return val;
                }
              }).map((val, key) => {
                // return console.log("");
              })}
            </SearchBar>
          </div>
          <div>
            <StyledLink className="busqueda" to="/search">
              <LogoContainer /* onClick={() => setShowMobileMenu(!showMobileMenu)} */
              >
                <GoSearch />
              </LogoContainer>
            </StyledLink>
          </div>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <StyledLink to="/">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
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
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
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
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <GiCook />
                </MenuItemLink>
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/login">
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <BsFillPersonPlusFill />
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
