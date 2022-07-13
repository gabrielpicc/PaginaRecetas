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

export function VistaReceta() {


    const receta = {
        "id": 1,
        "titulo": "Milanesa con papas fritas",
        "dificultad": "5",
        "categorias": ["Carne", "Verdura"],
        "ingredientes": ["200 g de carne", "2 huevos", "3 papas", "Aceite"],
        "url": "https://www.serargentino.com/public/images/2020/08/15964772970-MIILANESA-773x458.jpg",
        "calificacion": "5",
        "Procedimiento": "Dejar hervir las papas por 30 minutos y poner las milanesas en el horno",
        "status": "activo",
        "owner": "pepe"
    }

    return (

        <Container>
            <Img alt="Imagen de la Receta" src={receta.url} />

            <Label className="titulo" id="label1"> {receta.titulo}</Label>
            <Box>
                <Label>Calificación:</Label>
                <label className="estrella">★</label>
                {receta.calificacion>1 &&(
                    <label className="estrella">★</label>
                )}
                {receta.calificacion>2 &&(
                    <label className="estrella">★</label>
                )}
                {receta.calificacion>3 &&(
                    <label className="estrella">★</label>
                )}
                {receta.calificacion>4 &&(
                    <label className="estrella">★</label>
                )}
            </Box>
            <Box>
                <Label>¡Ahora califica tú la Receta!</Label>
                <Form>
                    <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5" />
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" />
                        <label for="radio5">★</label>
                    </p>
                </Form>
            </Box>

            <Label className="subtitulo">Categoría:</Label>
            <Box>
                <ul>
                    {receta.categorias.map((cat) => (
                        <li>{cat}</li>
                    )
                    )}
                </ul>
            </Box>
            <Box>
                <Label className="separada">Dificultad:</Label>
                <Label> {receta.dificultad} </Label>
            </Box>
            <Label className="subtitulo">Ingredientes:</Label>
            <Box>
                <ul>
                    {receta.ingredientes.map((ing) => (
                        <li>{ing}</li>
                    )
                    )}
                </ul>
            </Box>
            <Box className="ingredientes">
            </Box>
            <Label className="subtitulo">Procedimiento:</Label>
            <Label>{receta.Procedimiento}</Label>

        </Container>
    );

}


export default VistaReceta;