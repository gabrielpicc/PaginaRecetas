import { useState } from "react";
import { createRecepie, uploadFileImg } from "../../controller/miApp.controller";
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
    { value: "carnes", label: "carnes" },
    { value: "pollo", label: "pollo" },
    { value: "pescados", label: "pescados" },
    { value: "ensaladas", label: "ensaladas" },
    { value: "saludable", label: "saludable" },
    { value: "sopas", label: "sopas" },
    { value: "pastas", label: "pastas" },
    { value: "pizzas", label: "pizzas" },
    { value: "empanadas", label: "empanadas" },
    { value: "parrilla", label: "parrilla" },
    { value: "vegano", label: "vegano" },
    { value: "vegetariano", label: "vegetariano" },
    { value: "postres", label: "postres" },
    { value: "legumbres", label: "legumbres" },
    { value: "sushi", label: "sushi" },
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
    // let file = '';
    
    // if (img.name !== "") {
    //   //buscar extension archivo
    //   let archivoOrig = img.name;
    //   let posExt = archivoOrig.indexOf(".");
    //   let extension = archivoOrig.substring(posExt, archivoOrig.length);
    //   let aleatorio = Math.random().toString().substring(2, 15);

    //   file = "img"+"_"+aleatorio+extension;
    //   let archivoImg = await uploadFileImg(img, file)
    //   if (archivoImg.ok) {
    //     console.log(archivoImg)
    //   }
    // }


    formatIngredientes();
    let datos = {
      titulo: titulo,
      dificultad: dificultad,
      status: "Borrador",
      ingredientes: ingString,
      categorias: categorias,
      procedimiento: proc,
      usuario_id: localStorage.getItem("id"),
    };
    let postRecepie = await createRecepie(datos);
    if (postRecepie.rdo === 0) {
      alert(postRecepie.mensaje)
    }
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
          <input
            placeholder="Nombre de la Receta"
            type="text"
            required
            onChange={(e) => setTitulo(e.target.value)}
          />
        </TextField>
        <Box>
          <Label>Categoría:</Label>
          <Barra>
            <div>
              <Select
                isMulti
                options={options}
                required
                onChange={(e) => find(e)}
              />
            </div>
          </Barra>
        </Box>

        <Box>
          <Label>Dificultad:</Label>

          <input
            required
            type="number"
            min="1"
            max="5"
            onChange={(e) => setDificultad(e.target.value)}
          />
        </Box>
        <Label>Seleccione una Imágen:</Label>
        <input
          required
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
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
      <Textarea
        required
        type="text"
        onChange={(e) => setProc(e.target.value)}
      ></Textarea>
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
