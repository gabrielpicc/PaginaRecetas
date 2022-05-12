import { useState } from "react";
import {
  Label,
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
} from "./LoginPage.elements";
import { GiDeathStar } from "react-icons/gi";
import { Link } from "react-router-dom";

export function RegistrationPage() {
  return (
    <Container className="reg-container">
      <Title>
        <h3>
          {<GiDeathStar />} Empeza por registrarte {<GiDeathStar />}
        </h3>
      </Title>
      <Wrapper>
        <TextField>
          <input placeholder="Nombre" className="reg" />
        </TextField>
        <TextField>
          <input placeholder="Apellido" className="reg" />
        </TextField>
        <TextField>
          <input placeholder="Email" className="reg" />
        </TextField>
        <TextField>
          <input placeholder="Telefono" className="reg" />
        </TextField>
        <TextField>
          <input placeholder="Contraseña" className="reg" />
        </TextField>
        <TextField>
          <input placeholder="Confirmar contraseña" className="reg" />
        </TextField>
        <Button>
          <button>Confirmar</button>
        </Button>
      </Wrapper>
    </Container>
  );
}
