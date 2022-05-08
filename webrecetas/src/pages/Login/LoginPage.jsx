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

export function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userValidation = (user, pass) => {
    if (user === "pepe" && pass === "1234") {
      return true;
    } else {
      return false;
    }
  };

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

  return (
    <Container>
      <Title>
        <h3>
          <GiDeathStar />!
        </h3>
        <h3>Bienvenido a Star</h3>
        <h3>
          Woks¡
          <GiDeathStar />
        </h3>
      </Title>
      <Wrapper>
        <Label>
          <label>Email</label>
        </Label>
        <TextField>
          <input
            placeholder="Ingrese su Email"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </TextField>
        <Label>
          <label>Contraseña</label>
        </Label>
        <TextField>
          <input
            placeholder="Ingrese su Contraseña"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </TextField>
        <Button>
          <ConditionalLink to="/" condition={userValidation(user, pass)}>
            <button>Iniciar Sesion</button>
          </ConditionalLink>

          <button>Registrarse</button>
        </Button>
      </Wrapper>
    </Container>
  );
}
