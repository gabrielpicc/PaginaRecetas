import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Label,
  Container,
  TextField,
  Button,
  Title,
  Wrapper,
  Box,
  SearchBar,
} from "./SearchPage.elements";
import {
  getrecetabyingredient,
  getrecetabytitulo,
  getrecetabydificultad,
  getRecetabyCategory,
} from "../../controller/miApp.controller";
import { RecetasGrid } from "../LandingPage.elements";

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [titleSearch, setTitleSearch] = useState(true);
  const [ingSearch, setIngSearch] = useState(true);
  const [catSearch, setCatSearch] = useState(true);
  const [difSearch, setDifSearch] = useState(true);

  const [recetas, setRecetas] = useState();

  const eventoBuscar = async function () {
    let busqueda;
    if (ingSearch === false && catSearch === true && difSearch === true) {
      busqueda = await getrecetabyingredient(searchTerm);
    } else if (
      catSearch === false &&
      ingSearch === true &&
      difSearch === true
    ) {
      busqueda = await getRecetabyCategory(searchTerm);
    } else if (
      difSearch === false &&
      catSearch === true &&
      ingSearch === true
    ) {
      busqueda = await getrecetabydificultad(searchTerm);
    } else if (difSearch === true && catSearch === true && ingSearch === true) {
      busqueda = await getrecetabytitulo(searchTerm);
    } else {
      alert("Las opciones elegidas para filtrar no son validas");
    }
    setRecetas(busqueda);
  };

  const getChecked = (event) => {
    if (event.target.value === "ing") {
      setIngSearch(!ingSearch);
    } else if (event.target.value === "cat") {
      setCatSearch(!catSearch);
    } else {
      setDifSearch(!difSearch);
    }
  };

  const showRecepies = () => {};

  return (
    <Container>
      <div>
        <Box>
          <SearchBar>
            <input
              type="text"
              placeholder="Busqueda"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </SearchBar>
          <Button>
            <button onClick={eventoBuscar}> Search</button>
          </Button>
        </Box>
        <Label style={{ color: "#f0a500" }}>
          *En caso de no encontrar la receta deseada, se mostraran todas las
          recetas*
        </Label>
        <Label>Filtros:</Label>
        <Box>
          <Label>Ingredientes</Label>
          <input onChange={(e) => getChecked(e)} value="ing" type="checkbox" />
          <Label>Categoría</Label>
          <input onChange={(e) => getChecked(e)} value="cat" type="checkbox" />
          <Label>Dificultad</Label>
          <input onChange={(e) => getChecked(e)} value="dif" type="checkbox" />
        </Box>
      </div>
      <div>
        {recetas !== undefined ? (
          recetas.map((receta) => (
            <RecetasGrid>
              <div key={receta.id}>
                <Link
                  to={{
                    pathname: `/vista_receta/${receta.id}`,
                  }}
                >
                  <img
                    src={
                      "https://www.serargentino.com/public/images/2020/08/15964772970-MIILANESA-773x458.jpg"
                    }
                    alt="alt"
                    width={350}
                    height={300}
                  />
                </Link>
                <div>{receta.titulo}</div>
                <div>Dificultad: {receta.dificultad}</div>
              </div>
            </RecetasGrid>
          ))
        ) : (
          <div>No se busco ninguna receta</div>
        )}
      </div>
    </Container>
  );
}
