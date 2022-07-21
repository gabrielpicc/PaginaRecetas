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
import Loading from "../../componentes/NavBar/Loading";

export function VistaReceta() {
  const [numCalif, setNumCalif] = useState();
  const [calif, setCalif] = useState();
  const [loading, setLoading] = useState(true);
  const { receta_id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    let isSuscribed = true;

    const getRecetaById = async () => {
      //let info = { receta_id: receta_id };
      let data = await getRecepieById(receta_id);
      let json_data = await data.datos;
      if (isSuscribed) {
        setData(json_data);
        mostrarCalificacion();
      }
    };

    const changeLoadingState = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    getRecetaById().catch(console.error);
    changeLoadingState();
    console.log("hola", data);

    return () => (isSuscribed = false);
  }, [receta_id]);

  const actualizarCalificacion = async function (estrellas) {
    let datos = {
      calificacion: parseInt(estrellas.target.value),
      receta_id: receta_id,
      user: localStorage.getItem("id"),
    };
    let postCalificacion = await updateCalificacion(datos);
    console.log("datos califfffff", postCalificacion);
  };

  const mostrarCalificacion = async function () {
    let datos = {
      receta_id: receta_id,
      user: localStorage.getItem("id"),
    };
    let getCalif = await getCalificacion(datos);
    var calificacion = pluckCalif(getCalif);
    calificacion = calificacion[1] / calificacion[0];
    console.log("la calificacion", calificacion);
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
    let list = [];
    console.log(values);
    values.forEach((value) => {
      if (ing === true) {
        console.log(value.ingrediente_descr);
        list.push(value.ingrediente_descr);
      } else {
        console.log(value.descripcion);
        list.push(value.descripcion);
      }
    });
    console.log(list);
    return list;
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        {console.log("jhwegrwujherg", data)}
        {/* {console.log(dificultad)}
        {console.log(procedimiento)}
        {console.log(categoria)}
        {console.log(ingredientes)} */}
        <Container>
          <Img
            alt="Imagen de la Receta"
            src={
              "https://www.serargentino.com/public/images/2020/08/15964772970-MIILANESA-773x458.jpg"
            }
          />

          <Label className="titulo" id="label1">
            {data.titulo}
          </Label>
          <Box>
            <Label>Calificación:</Label>
            <label className="estrella">{numCalif}★</label>
          </Box>
          <Box>
            <Label>¡Ahora califica tú la Receta!</Label>
            <Form>
              <p className="clasificacion">
                <input
                  id="radio1"
                  type="radio"
                  name="estrellas"
                  value={5}
                  onClick={actualizarCalificacion}
                  // onChange={mostrarCalificacion}
                />
                <label for="radio1">★</label>
                <input
                  id="radio2"
                  type="radio"
                  name="estrellas"
                  value={4}
                  onClick={actualizarCalificacion}
                  // onChange={mostrarCalificacion}
                />
                <label for="radio2">★</label>
                <input
                  id="radio3"
                  type="radio"
                  name="estrellas"
                  value={3}
                  onClick={actualizarCalificacion}
                  // onChange={mostrarCalificacion}
                />
                <label for="radio3">★</label>
                <input
                  id="radio4"
                  type="radio"
                  name="estrellas"
                  value={2}
                  onClick={actualizarCalificacion}
                  // onChange={mostrarCalificacion}
                />
                <label for="radio4">★</label>
                <input
                  id="radio5"
                  type="radio"
                  name="estrellas"
                  value={1}
                  onClick={actualizarCalificacion}
                  // onChange={mostrarCalificacion}
                />
                <label for="radio5">★</label>
              </p>
            </Form>
          </Box>

          <Label className="subtitulo">Categoría:</Label>
          <Box>
            <ul>
              {mapValue(data.categoria, false).map((cat) => (
                <li>{cat}</li>
              ))}
            </ul>
          </Box>
          <Box>
            <Label className="separada">Dificultad:</Label>
            <Label>{data.dificultad} </Label>
          </Box>
          <Label className="subtitulo">Ingredientes:</Label>
          <Box>
            <ul>
              {mapValue(data.ingredientes, true).map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </Box>
          <Box className="ingredientes"></Box>
          <Label className="subtitulo">Procedimiento:</Label>
          <Label>{data.procedimiento}</Label>
        </Container>
      </div>
    );
  }
}

export default VistaReceta;
