import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #000000;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  .busqueda{

    
    &:hover {
    color: #fff;
    background-color: #F0A500;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #082032;
      }
    }
  }
  }
`;

export const LogoLink = styled(Link)`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  //font-family: Starjedi;

  p {
    &:nth-child(2) {
      color: #fff;
      font-size: 1.5rem;
    }
    &:nth-child(3) {
      font-size: 1.75rem;
      font-weight: 500;
      color: #F0A500;
    }
  }

  svg {
    fill: #F0A500;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: #082032;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64b2ff;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #F0A500;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #F0A500;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #082032;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #F0A500;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #F0A500;
      margin-right: 0.5rem;
    }
  }
`;

export const HideContent = styled.div`
  display: none;
  color: red;
`;

export const showContent = styled.div`
  display: flex;
  color: red;
`;

export const SearchBar = styled.div`
    background-color: #F0A500;

    input{
      margin: 10px;
      width: 150px;
      height: 50px;
      font-size: 15px;
    }
`;


