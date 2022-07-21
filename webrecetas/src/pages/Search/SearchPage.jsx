import { useState } from "react";
import {
    Label,
    Container,
    TextField,
    Button,
    Title,
    Wrapper,
    Box,
} from "./SearchPage.elements";

export function SearchPage() {

    function unselect() {
        document.querySelectorAll('[name=Tipo]').forEach((x) => x.checkboxed = false);
    }

    return (
        <Container>
            <div>
                <Label>Filtros:</Label>
                <Box>
                    <Label>Ingredientes</Label>
                    <input type="checkbox" />
                </Box>
                <Box>
                    <Label>Categoría</Label>
                    <input type="checkbox" />
                </Box>
                <Box>
                    <Label>Dificultad</Label>
                    <input type="checkbox" />
                </Box>
                <Box>
                    <Label>Calificación</Label>
                    <input type="checkbox" />
                </Box>
            </div>
            <div>

            </div>
        </Container>
    )
}