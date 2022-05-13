import React, { useState } from "react";
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
import recetas from "./recetas.json";

export function VistaReceta() {

    const [recepies, setRecepies] = useState(recetas);

    const nombre = "";
    const categorias=[];
    const dificultad = 1;
    const ingrefientes=[];
    const procedimiento="";
    const id = 2; /* QUE SE PASE ESTO COMO VARIABLE */

    return (
        
        <Container>
            {/* {recepies.map(
                (receta) => (
                    {receta.id === id} 
                )

            )} */}
            <Img alt="Imagen de la Receta" />

            <Label id="label1">Nombre de la Receta</Label>
            <Box>
                <Label>¡Califica la Receta!</Label>
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
            
            <Label>Categoría:</Label>
            <Label>la categoría</Label>
            <Box>
                <Label>Dificultad:</Label>
                <Label>la dificultad</Label>
            </Box>
            <Label>Ingredientes:</Label>
            <Box className="ingredientes">
                <ul>

                </ul>
            </Box>
            <Label>Procedimiento:</Label>

        </Container>
    );


    document.getElementById("label1").innerText("holaaaa")

}


export default VistaReceta;