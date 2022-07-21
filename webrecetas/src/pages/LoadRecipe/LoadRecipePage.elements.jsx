import styled from "styled-components";

export const Label = styled.div`
  margin: 0;
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
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
    height: 70px;
    font-size: 25px;
    width: 400px;

    ::-webkit-input-placeholder {
      text-align: center;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  min-height: 5vh;

  * {
    background-color: #000000;
    letter-spacing: 4px;
  }

  button {
    width: 70px;
    height: 30px;
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

export const SelectBox = styled.div`
  height: auto;
  width: auto;
  position: relative;
  font-size: 15px;
  
  select{
    max-width: 100px;
  }
`;

export const Grid = styled.div`
  margin-top: 3%;

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
  margin-top: 27px;
  width: 470px;
  height: 670px;
  border-radius: 3%;
  color: #fff;
  border: 3px solid #f0a500;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-around;
  z-index: -2;

  display: grid;
  gap: 10px;
  background-color: #000;
  background: linear-gradient(to right,  #f0a4003e , #00000039);
  padding: 10px;
`;


export const Input = styled.input`
  background-color: #f0a500;
  height: 50px;
  width: 400px;
  border: 3px solid #000;

`;

export const Barra = styled.div`
  div{
    background-color: #f0a500;
    font-weight: bold;
  }

`;

export const Box = styled.div`
  align-content: center;
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;

  
  input[type="number"]{
      height: 30;
    width: 30;
    background-color: #f0a500;
    border: 1px solid #ffff;
    font-weight: bold;
    text-align: center;
    }

  
`;


export const Textarea = styled.textarea`
  align-content: center;
  background-color: #f0a500;
  height: 250px;
  width: 400px;
  border: 3px solid #000;
  word-wrap: break-word;
  justify-content: center;
  resize: none;
`;