import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #f0a500;
  background-color: #000000;
  text-align: center;
  margin-bottom: 0px;

  div {
    height: 10px;
    margin-top: 30px;
    background-color: #000000;
    font-size: 2rem;

    svg {
      font-size: 3rem;
      background-color: #000000;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
`;
