import styled from "styled-components";

export const Container = styled.div`
  padding: 10%;
  

  th,
  td {
    border: 2px solid #f0a500;
    text-align: center;
    padding: 5px;
    font-size: 32px;
    background-color: #000000;
  }

  div {
    display: flex;
    flex-direction: row;
    background-color: #000000;


    button {
      width: 100%;
      align-items: center;
      padding: 5px;
      cursor: pointer;
      font-size: 1.5rem;
      margin: 2%;
      border: none;
      border: 2px solid #f0a500;
      color: #fff;
      border-radius: 4px;
      transition: ease-out 0.3s;
      font-weight: bold;
      outline: none;
      background-color: #000000;
    }

    button:hover {
      color: #000000;
      cursor: pointer;
      background-color: #f0a500;
    }
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  tr {
    border: 3px solid #f0a500;
    border-bottom: 5px solid #f0a500;
    word-wrap: break-word;
  }

  td:nth-of-type(1):before {
    content: "Titulo: ";
    -webkit-text-stroke: 1px #f0a500;
  }
  td:nth-of-type(2):before {
    content: "Dificultad: ";
    -webkit-text-stroke: 1px #f0a500;
  }
  td:nth-of-type(3):before {
    content: "Categorias: ";
    -webkit-text-stroke: 1px #f0a500;
  }
  td:nth-of-type(4):before {
    content: "Calificacion: ";
    -webkit-text-stroke: 1px #f0a500;
  }
  td:nth-of-type(5):before {
    content: "Status: ";
    -webkit-text-stroke: 1px #f0a500;
  }
  td:nth-of-type(6):before {
    content: "Acciones: ";
    -webkit-text-stroke: 1px #f0a500;
  }
`;
