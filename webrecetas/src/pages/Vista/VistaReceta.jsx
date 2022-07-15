import React, { useEffect, useState } from "react";
import {
  Label,
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
  Img,
  Form,
  Box,
} from "./VistaReceta.elements";
import {
  updateCalificacion,
  getCalificacion,
  getRecepieById,
} from "../../controller/miApp.controller";
import { useParams } from "react-router-dom";

export function VistaReceta() {
  const [numCalif, setNumCalif] = useState();
  const [recepieData, setRecepieData] = useState();
  const { receta_id } = useParams();

  useEffect(() => {
    async function getRecetaById() {
      let datos = { receta_id: receta_id }
      let data = await getRecepieById(datos);
      setRecepieData(data)
      console.log("datosss", data)
    }
    getRecetaById()
  }, receta_id)

  const receta = {
    id: receta_id,
    titulo: "recepieData.titulo",
    dificultad: "5",
    categorias: ["Carne", "Verdura"],

    ingredientes: ["200 g de carne", "2 huevos", "3 papas", "Aceite"],
    url: "https://www.serargentino.com/public/images/2020/08/15964772970-MIILANESA-773x458.jpg",
    calificacion: 5,
    Procedimiento:
      "Dejar hervir las papas por 30 minutos y poner las milanesas en el horno",
    status: "activo",
    owner: "pepe",
  };

  const actualizarCalificacion = async function (estrellas) {
    let datos = {
      calificacion: parseInt(estrellas.target.value),
      receta_id: receta.id,
      user: localStorage.getItem("id"),
    };
    let postCalificacion = await updateCalificacion(datos);
    console.log(postCalificacion.rdo);
    if (postCalificacion.rdo === 0) {
    }
    if (postCalificacion.rdo === 1) {
      alert(postCalificacion.mensaje);
    }
  };

  const mostrarCalificacion = async function () {
    let datos = {
      receta_id: receta.id,
      user: localStorage.getItem("id"),
    };
    let getCalif = await getCalificacion(datos);
    var calificacion = pluckCalif(getCalif);
    console.log(calificacion);
    calificacion = calificacion[1] / calificacion[0];
    setNumCalif(calificacion.toFixed(2));
  };

  const pluckCalif = (getCalif) => {
    var cant = 0;
    var califNumbers = 0;
    getCalif.forEach((calif) => {
      cant += 1;
      califNumbers += calif.calificacion_sum;
    });
    return [cant, califNumbers];
  };

  const mapValue = (values, ing) => {
    let list = []
    console.log(values)
    values.forEach((value) => {
      if (ing === true) {
        list.push(value.ingrediente_descr);
      } else {
        list.push(value.descripcion);
      }
    })
    return list
  }

  return (
    <Container>
      <Img alt="Imagen de la Receta" src={receta.url} />

      <Label className="titulo" id="label1">
        {" "}
        {/* {recepieData.titulo} */}
      </Label>
      <Box>
        <Label>Calificación:</Label>
        <label className="estrella">{receta.calificacion}★</label>
      </Box>
      <Box>
        <Label>¡Ahora califica tú la Receta!</Label>
        <Form>
          <p class="clasificacion">
            <input
              id="radio1"
              type="radio"
              name="estrellas"
              value={5}
              onClick={actualizarCalificacion}
              onChange={mostrarCalificacion}
            />
            <label for="radio1">★</label>
            <input
              id="radio2"
              type="radio"
              name="estrellas"
              value={4}
              onClick={actualizarCalificacion}
              onChange={mostrarCalificacion}
            />
            <label for="radio2">★</label>
            <input
              id="radio3"
              type="radio"
              name="estrellas"
              value={3}
              onClick={actualizarCalificacion}
              onChange={mostrarCalificacion}
            />
            <label for="radio3">★</label>
            <input
              id="radio4"
              type="radio"
              name="estrellas"
              value={2}
              onClick={actualizarCalificacion}
              onChange={mostrarCalificacion}
            />
            <label for="radio4">★</label>
            <input
              id="radio5"
              type="radio"
              name="estrellas"
              value={1}
              onClick={actualizarCalificacion}
              onChange={mostrarCalificacion}
            />
            <label for="radio5">★</label>
          </p>
        </Form>
      </Box>

      <Label className="subtitulo">Categoría:</Label>
      <Box>
        <ul>
          {/* {mapValue(recepieData.categoria, false).map((cat) => (
            <li>{cat}</li>
          ))} */}
        </ul>
      </Box>
      <Box>
        <Label className="separada">Dificultad:</Label>
        {/* <Label> {recepieData.dificultad} </Label> */}
      </Box>
      <Label className="subtitulo">Ingredientes:</Label>
      <Box>
        <ul>
          {/* {mapValue(recepieData.ingredientes, true).map((ing) => (
            <li>{ing}</li>
          ))} */}
        </ul>
      </Box>
      <Box className="ingredientes"></Box>
      <Label className="subtitulo">Procedimiento:</Label>
      {/* <Label>{recepieData.procedimiento}</Label> */}
    </Container>
  );
}

export default VistaReceta;
