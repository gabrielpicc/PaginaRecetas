import { useState, useEffect } from "react";
import { Container, Recetas, RecetasGrid } from "./LandingPage.elements";
import recetas from "./MyRecepies/recetas.json";
import { Link } from "react-router-dom";
import { GiDeathStar } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { getAllRecepies, getRecepieById } from "../controller/miApp.controller";
import Loading from "../componentes/NavBar/Loading";



export function LandingPage() {
  useEffect(() => {
    async function onLoadShowRecepies() {
      let data = await getAllRecepies();
      setRecetasBase(data)
    }
    onLoadShowRecepies()
    // localStorage.clear("receta_por_id_titulo");
    // localStorage.clear("receta_por_id_dificultad");
    // localStorage.clear("receta_por_id_procedimiento");
    // localStorage.clear("receta_por_id_categoria");
    // localStorage.clear("receta_por_id_ingredientes");
  }, [])

  const [recepies, setRecepies] = useState(recetas);
  const [recetasBase, setRecetasBase] = useState([]);

  // const getRecetaById = async function (receta_id) {
  //   let datos = { receta_id: receta_id };
  //   let data = await getRecepieById(datos);
  //   console.log(data.datos)
  //   localStorage.clear("receta_por_id_titulo")
  //   localStorage.setItem("receta_por_id_titulo", data.datos.titulo);
  //   localStorage.setItem("receta_por_id_dificultad", data.datos.dificultad);
  //   localStorage.setItem("receta_por_id_procedimiento", data.datos.procedimiento);
  //   localStorage.setItem("receta_por_id_categoria", data.datos.categoria);
  //   localStorage.setItem("receta_por_id_ingredientes", data.datos.ingredientes);
  // };

  return (
    <Container>
      {console.log(recetasBase)}
      <div className="description">
        <label className="label1">¡Bienvenido a Star</label>
        <label className="label2">Woks!</label>
        <p>¡Proba las recetas que mas le gustaron a Jabba el Hutt!</p>
      </div>
      <RecetasGrid>
        {recetasBase.map((receta) => (
          <div key={receta.id}>
            <Link to={{
              pathname: `/vista_receta/${receta.id}`
            }} >
              <img src={"https://www.serargentino.com/public/images/2020/08/15964772970-MIILANESA-773x458.jpg"} alt="alt" width={350} height={300}/>
            </Link>
            <div>{receta.titulo}</div>
            <div>
              <GiDeathStar />
              <GiDeathStar />
              <GiDeathStar />
              <GiDeathStar />
              <GiDeathStar />
            </div>
            <div>Dificultad: {receta.dificultad}</div>
          </div>
        ))}
      </RecetasGrid>
    </Container>
  );
}

export default LandingPage;
