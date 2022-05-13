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

  label {
    text-transform: capitalize;
    font-size: 2rem;
  }

  input {
    color: #fff;
    background-color: #000000;
    border: 2px solid #f0a500;
    border-radius: 4px;

    ::-webkit-input-placeholder {
      text-align: center;
    }
  }

  .reg {
    ::placeholder {
      color: #dbd8d8;
    }
  }
`;