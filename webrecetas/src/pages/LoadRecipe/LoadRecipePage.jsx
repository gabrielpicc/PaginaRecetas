import { useState } from "react";
import { createRecepie } from "../../controller/miApp.controller";
import {
  Label,
  TextField,
  Button,
  Grid,
  Box,
  Input,
  Textarea,
  Barra,
} from "./LoadRecipePage.elements";
import Select from "react-select";
import { NoLogUserCont } from "../NotLoguedPage.elements";

export function LoadRecipePage() {
  const options = [
    { value: "Carnes", label: "Carnes" },
    { value: "Pollo", label: "Pollo" },
    { value: "Pescados", label: "Pescados" },
    { value: "Ensaladas", label: "Ensaladas" },
    { value: "Saludable", label: "Saludable" },
    { value: "Sopas", label: "Sopas" },
    { value: "Pastas", label: "Pastas" },
    { value: "Pizzas", label: "Pizzas" },
    { value: "Empanadas", label: "Empanadas" },
    { value: "Parrilla", label: "Parrilla" },
    { value: "Vegano", label: "Vegano" },
    { value: "Vegetariano", label: "Vegetariano" },
    { value: "Postres", label: "Postres" },
    { value: "Legumbres", label: "Legumbres" },
    { value: "Sushi", label: "Sushi" },
  ];

  const [ingredientList, setingredientList] = useState([{ ingredient: "" }]);
  const [ingString, setIngString] = useState("");
  const [titulo, setTitulo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [categorias, setCategorias] = useState("");
  const [proc, setProc] = useState("");
  const [img, setImg] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setingredientList(list);
  };

  const handleIngredientRemove = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setingredientList(list);
  };

  const handleIngredientAdd = () => {
    setingredientList([...ingredientList, { ingredient: "" }]);
  };


  const handleNewRecepie = async function () {
    formatIngredientes();
    console.log(proc)
    let datos = {
      titulo: titulo,
      dificultad: dificultad,
      status: 'Borrador',
      ingredientes: ingString,
      categorias: categorias,
      procedimiento: proc,
      usuario_id: localStorage.getItem("id")
    };
    let postRecepie = await createRecepie(datos);
  };

  const formatIngredientes = () => {
    let ingredientes = [];
    Object.keys(ingredientList).map(function (value) {
      ingredientes.push(ingredientList[value].ingredient);
    });
    setIngString(ingredientes.join());
  };


  const find = (event) => {
    let categories = [];
    Object.keys(event).map(function (value) {
      categories.push(event[value].value);
    });
    setCategorias(categories.join());
  };

  return JSON.parse(localStorage.getItem("email") !== null) ? (
    <Grid>
      <div>
        <TextField>
          <input placeholder="Nombre de la Receta" type="text" required onChange={(e) => setTitulo(e.target.value)}/>
        </TextField>
        <Box>
          <Label>Categoría:</Label>
          <Barra>
            <div>
              <Select isMulti options={options} required onChange={(e) => find(e)}/>
            </div>
          </Barra>
        </Box>

        <Box>
          <Label>Dificultad:</Label>

          <input required type="number" min="1" max="5" onChange={(e) => setDificultad(e.target.value)}/>
        </Box>
        <Label>Seleccione una Imágen:</Label>
        <input required type="file" accept="image/png, image/gif, image/jpeg" onChange={(e) => setImg(e.target.value)}/>

        <div>
          <Label>Ingredientes:</Label>
          {ingredientList.map((singleIngredient, index) => (
            <div key={index}>
              <div>
                <input
                  name="ingredient"
                  type="text"
                  id="ingredient"
                  value={singleIngredient.ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  required
                />
                {ingredientList.length - 1 === index &&
                  ingredientList.length < 20 && (
                    <Button>
                      <button type="button" onClick={handleIngredientAdd}>
                        +
                      </button>
                    </Button>
                  )}
              </div>
              <div>
                {ingredientList.length !== 1 && (
                  <Button>
                    <button
                      type="button"
                      onClick={() => handleIngredientRemove(index)}
                    >
                      Borrar
                    </button>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Label>Procedimiento:</Label>
      <Textarea required type="text" onChange={(e) => setProc(e.target.value)}></Textarea>
      <Button>
        <button type="submit" onClick={handleNewRecepie}>
          Enviar
        </button>
      </Button>
    </Grid>
  ) : (
    <NoLogUserCont>
      <div>Debes iniciar sesion para poder ver tus recetas</div>
    </NoLogUserCont>
  );
}
