import styled from "styled-components";

export const Container = styled.div`
  .description {
    height: auto;
    margin-top: 50px;
    border: 2px solid #f0a500;
    background-color: #000000b6;
    border-radius: 30px;
    text-align: center;
    padding: 25px;
    justify-content: center;
  }

  p {
    font-size: 2rem;
  }

  .label1 {
    color: #fff;
    font-size: 4rem;
  }

  .label2 {
    font-size: 4.5rem;
    font-weight: 500;
    color: #f0a500;
  }
`;

export const RecetasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 40px;
  padding: 80px;
  padding-top: 140px;
  justify-content: center;

  div {
    text-align: center;
    font-size: 2rem;

    svg{
        fill: #f0a500;
    }
  }

  @media (max-width: 560px) {
    .moviesGrid {
      grid-template-columns: 100%;
    }
  }

  img {
    :hover {
      opacity: 0.5;
    }
    border-radius: 10px;
    border: 2px solid #f0a500;
    background-color: azure;
  }
`;

// export const Containet = styled.div``;
