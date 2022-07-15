import { useState, useEffect } from "react";
import { Container, Recetas, RecetasGrid } from "./LandingPage.elements";
import recetas from "./MyRecepies/recetas.json";
import { Link } from "react-router-dom";
import { GiDeathStar } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { getAllRecepies } from "../controller/miApp.controller";



export function LandingPage() {
  useEffect(() => {
    async function onLoadShowRecepies() {
      let data = await getAllRecepies();
      setRecetasBase(data)
    }
    onLoadShowRecepies()
  }, [])

  const [recepies, setRecepies] = useState(recetas);
  const [recetasBase, setRecetasBase] = useState([]);

  // const allRecepies = async function () {
  //   let recetas = await getAllRecepies;
  //   console.log(recetas)
  //   return recetas
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
