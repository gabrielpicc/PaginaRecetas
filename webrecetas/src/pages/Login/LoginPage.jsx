import { useEffect, useState } from "react";
import { login, getuser } from "../../controller/miApp.controller";
import {
  Label,
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
} from "./LoginPage.elements";
import { GiDeathStar } from "react-icons/gi";
import { Link, Navigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarioValido, setUsuarioValido] = useState(false);

  const validarLogin = async function () {
    let datos = {
      email: email,
      password: password,
    };
    let getLogin = await login(datos);
    console.log(getLogin.rdo);
    if (getLogin.rdo === 0) {
      setUsuarioValido(true);
    }
    if (getLogin.rdo === 1) {
      alert(getLogin.mensaje);
    }
  };

  //Valido campos y llamo endpoint
  const loginUser = () => {
    if (email !== "" && password !== "") {
      validarLogin();
    } else {
      alert("Debe completar usuario y password");
    }
  };

  const getuserr = async function () {
    let getLoefwfgin = await getuser();
    console.log(getLoefwfgin);
  };

  const redirect = () => {
    if (usuarioValido) {
      return <Navigate to="/" />;
    }
  };

  return (
    <div>
      {redirect()}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextField>
          <Label>
            <label>Contraseña</label>
          </Label>
          <TextField>
            <input
              placeholder="Ingrese su Contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextField>
          <Button>
            <button onClick={loginUser}>Iniciar Sesion</button>
            <Link to="/registration">
              <button>Registrarse</button>
            </Link>
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
}

export default LoginPage;
