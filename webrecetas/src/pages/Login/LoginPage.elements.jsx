import styled from "styled-components";
import { StyledLink } from "../../componentes/NavBar/Navbar.elements";

export const Container = styled.div`
  width: 320px;
  height: 420px;
  border-radius: 5%;
  background: #000;
  color: #fff;
  border: 3px solid #f0a500;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-between;
  z-index: -1;
  /* width: 30%;
  background-color: #000000;
  margin-top: 100px;
  justify-content: center;
  align-content: center;
  justify-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;

    div {
      width: 30%;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: space-between;
    }
  }*/
`;

export const Wrapper = styled.div`
  padding: 30px 35px;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 85px;
  display: flex;
  //flex: auto;
  justify-content: center;
  align-items: center;

  h3 {
    &:nth-child(1) {
      color: #f0a500;
      font-size: 1.3rem;
    }
    &:nth-child(2) {
      color: #fff;
      font-weight: bold;
    }
    &:nth-child(3) {
      color: #f0a500;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

export const Label = styled.div`
  margin: 0;
  padding: 7px;
  font-weight: bold;
  text-align: center;
`;

export const TextField = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;

  input {
    color: #fff;
    background-color: #000000;
    border: 2px solid #f0a500;
    border-radius: 4px;

    ::-webkit-input-placeholder {
      text-align: center;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 5vh;

  * {
    background-color: #000000;
    letter-spacing: 4px;
  }

  button {
    width: 100px;
    height: 40px;
    border: none;
    border: 2px solid #f0a500;
    color: #fff;
    border-radius: 4px;
    transition: ease-out 0.3s;
    font-weight: bold;
    font-size: 0.6rem;
    outline: none;
    position: relative;
    z-index: 1;
  }

  button:hover {
    color: #fff;
    cursor: pointer;
  }

  button:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #f0a500;
  }

  button:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
