import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 600px;
  height: 700px;
  border-radius: 5%;
  background: #000; //linear-gradient(to right,  #f0a40018 , #00000039);
  color: #fff;
  border: 3px solid #f0a500;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  z-index: -1;

  &.reg-container {
    width: 350px;
    height: 500px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 35px;
`;

export const UserFields = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 50px;

  label {
    text-transform: capitalize;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 50px;
  }

  .x {
    font-size: 4rem;
    color: #f0a500;
  }

  input {
    color: #fff;
    background-color: #000000;
    border: 2px solid #f0a500;
    border-radius: 4px;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-around;
    text-align: center;
    align-items: center;
    width: 80%;
    padding: 10px;
    margin: 10px;

    ::-webkit-input-placeholder {
      text-align: center;
    }
  }

  .reg {
    ::placeholder {
      color: #dbd8d8;
    }
  }

  button {
    width: 100px;
    height: 40px;
    border: none;
    border: 2px solid #f0a500;
    color: #fff;
    background-color: #000000;
    border-radius: 4px;
    transition: ease-out 0.3s;
    font-weight: bold;
    font-size: 1rem;
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
