import styled from "styled-components";
import { StyledLink } from "../../componentes/NavBar/Navbar.elements";


export const Container = styled.div`
margin: 20px;
  width: 420px;
  height: 650px;
  border-radius: 3%;
  background: linear-gradient(to right,  #f0a4003e , #00000039);
  color: #fff;
  border: 3px solid #f0a500;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-between;
  z-index: -1;

  overflow: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
}
  ::-webkit-scrollbar:vertical {
    width:10px;
}
  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 100px;
    border: 2px solid #ffff;
}

  .separada{
    border: 2px solid #f0a500;
    background-color: #000;
    width: 40%;
    margin-right: 15%;
  }

  .titulo{
    border: 2px solid #f0a500;
    background-color: #000;
    width: 70%;
    margin-left: 15%;
  }

  .subtitulo{
    border: 2px solid #f0a500;
    background-color: #000;
    width: 40%;
    margin-left: 15%;
  }
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

export const Img = styled.img`
margin: 9px;
    width: 375px;
    height: 180px;
    border: 2px solid #f0a500;
    border-radius: 5%;
`;

export const Form = styled.form`
    width: 250px;
    margin: 5px;
    height: 50px;

    .clasificacion{
        direction: rtl;
        unicode-bidi: bidi-override;
    }

    p{
        text-align: center;
    }

    label{
        font-size: 25px;
    }
    label:hover,
    label:hover ~ label{
        color: #ffa60065;
        
    }

    input[type="radio"]{
        display: none;
    }
    input[type="radio"]:checked ~ label {
        color: orange;
    }
`;

export const Box = styled.div`
  align-content: center;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;

  .estrella{
    color: orange;
    font-size: 25px;
  }

  .ingredientes{
      align-content: left;

  }
`;