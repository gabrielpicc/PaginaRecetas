import { useEffect, useState } from "react";
import {
  getDatosPregunta,
  establecerNuevaContraseña,
} from "../../controller/miApp.controller";
import {
  Label,
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
} from "../Login/LoginPage.elements";
import { GiDeathStar } from "react-icons/gi";
import { Link, Navigate } from "react-router-dom";

export function RecoverPassPage() {
  const [email, setEmail] = useState("");
  const [pulsado, setPulsado] = useState(false);
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [disable, setDisable] = useState(false);
  const [contestacion, setContestacion] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [contraseña, setContraseña] = useState("");
  const [disable_2, setDisable_2] = useState(false);
  const [nuevaContra, setNuevaContra] = useState("");
  /* const redirect = () => {
      if (usuarioValido) {
        return <Navigate to="/" />;
      }
    }; */

  const obtenerPregunta = async function () {
    if (email === "") {
      alert("Debe ingresar un email");
    } else {
      try {
        let datos = await getDatosPregunta(email);
        if (datos !== null) {
          setDisable(true);
          setPregunta(datos.pregunta);
          setRespuesta(datos.respuesta);
          setContraseña(datos.contraseña);
          setPulsado(true);
        } else {
          alert("El correo ingresado nunca fue usado");
        }
      } catch {
        alert("El mail ingresado no es valido o no existe en la base de datos");
        window.location.reload()
      }
    }
  };

  const compararResultados = () => {
    if (contestacion.toLocaleLowerCase() === respuesta.toLocaleLowerCase()) {
      setMostrarContraseña(true);
      setDisable_2(true);
    } else {
      alert("Respuesta incorrecta");
    }
  };

  const reestablecerContra = async function () {
    if (nuevaContra !== "") {
      let data = {
        contraseña: nuevaContra,
        email: email,
      };
      establecerNuevaContraseña(data);
    } else {
      alert("Escriba una nueva contraseña");
    }
  };

  return (
    <div>
      {/* {redirect()} */}
      <Container>
        <Title>
          <h3>
            <GiDeathStar />
          </h3>
          <h3>Recuperar contraseña</h3>
          <h3>
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
          <Button>
            <button disabled={disable} onClick={() => obtenerPregunta()}>
              Aceptar
            </button>
          </Button>
          {pulsado ? (
            <div>
              <Label>
                <label>{pregunta}</label>
              </Label>
              <TextField>
                <input
                  placeholder="Ingrese su respuesta"
                  type="text"
                  onChange={(e) => setContestacion(e.target.value)}
                />
              </TextField>
              <Button>
                <button
                  disabled={disable_2}
                  onClick={() => compararResultados()}
                >
                  Enviar
                </button>
              </Button>
            </div>
          ) : (
            <div />
          )}
          {mostrarContraseña ? (
            <div>
              <TextField>
                <input
                  placeholder="Ingrese su nueva contraseña"
                  type="password"
                  onChange={(e) => setNuevaContra(e.target.value)}
                />
              </TextField>
              <Button>
                <button onClick={() => reestablecerContra()}> Cambiar</button>
              </Button>
            </div>
          ) : (
            <div />
          )}
          <Button>
            <Link to="/login">
              <button>Volver a Iniciar Sesión</button>
            </Link>
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
}

export default RecoverPassPage;
