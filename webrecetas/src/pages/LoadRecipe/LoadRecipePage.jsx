import { useState } from "react";
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

  return JSON.parse(localStorage.getItem("isLogued")) ? (
    <form>
      <Grid>
        <div>
          <TextField>
            <input placeholder="Nombre de la Receta" type="text" required />
          </TextField>
          <Box>
            <Label>Categoría:</Label>
            <Barra>
              <div>
                <Select isMulti options={options} required />
              </div>
            </Barra>
          </Box>

          <Box>
            <Label>Dificultad:</Label>

            <input required type="number" min="1" max="5" />
          </Box>
          <Label>Seleccione una Imágen:</Label>
          <input
            required
            type="file"
            accept="image/png, image/gif, image/jpeg"
          />

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
        <Textarea required type="text"></Textarea>
        <Input type="submit" />
      </Grid>
    </form>
  ) : (
    <NoLogUserCont>
      <div>Debes iniciar sesion para poder ver tus recetas</div>
    </NoLogUserCont>
  );
}
