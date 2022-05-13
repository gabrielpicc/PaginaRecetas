import { useEffect, useState } from "react";
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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        name: name,
        last_name: lastName,
        email: email,
        phone: phone,
        pass: pass,
        confPass: confPass,
      })
    );
  });

  return (
    <Container className="reg-container">
      <Title>
        <h3>
          {<GiDeathStar />} Empeza por registrarte {<GiDeathStar />}
        </h3>
      </Title>
      <form typeof="submit">
        <Wrapper>
          <TextField>
            <input
              placeholder="Nombre"
              required
              onChange={(e) => setName(e.target.value)}
              className="reg"
            />
          </TextField>
          <TextField>
            <input
              required
              placeholder="Apellido"
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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
            <Link to="/">
              <button type="submit">Confirmar</button>
            </Link>
          </Button>
        </Wrapper>
      </form>
    </Container>
  );
}
