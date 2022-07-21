import { useEffect, useState } from "react";
import { register } from "../../controller/miApp.controller";
import { Navigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
} from "./LoginPage.elements";
import { GiDeathStar } from "react-icons/gi";
import { Link } from "react-router-dom";

export function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pass, setPass] = useState("");
  const [usuarioValido, setUsuarioValido] = useState(false);

  const registerUser = () => {
    if (
      (nombre !== "" && pass !== "",
      apellido !== "",
      email !== "" && telefono !== "")
    ) {
      validateRegistration();
    } else {
      alert("Alguno de los campos esta vacio");
    }
  };

  const validateRegistration = async function () {
    let datos = {
      email: email,
      pass: pass,
      nombre: nombre,
      telefono: telefono,
      apellido: apellido,
    };
    let getRegistration = await register(datos);
    console.log(getRegistration.rdo);
    if (getRegistration.rdo === 0) {
      setUsuarioValido(true);
    }
    if (getRegistration.rdo === 1) {
      alert(getRegistration.mensaje);
    }
  };

  const redirect = () => {
    if (usuarioValido) {
      return <Navigate to="/" />;
    }
  };

  return (
    <div>
      {redirect()}
      <Container className="reg-container">
        <Title>
          <h3>
            {<GiDeathStar />} Empeza por registrarte {<GiDeathStar />}
          </h3>
        </Title>
        <Wrapper>
          <TextField>
            <input
              placeholder="Nombre"
              required
              onChange={(e) => setNombre(e.target.value)}
              className="reg"
            />
          </TextField>
          <TextField>
            <input
              required
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              className="reg"
            />
          </TextField>
          <TextField>
            <input
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="reg"
            />
          </TextField>
          <TextField>
            <input
              required
              placeholder="Telefono"
              onChange={(e) => setTelefono(e.target.value)}
              className="reg"
            />
          </TextField>
          <TextField>
            <input
              required
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPass(e.target.value)}
              className="reg"
            />
          </TextField>
          <Button>
            <button type="submit" onClick={registerUser}>
              Confirmar
            </button>
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
}
