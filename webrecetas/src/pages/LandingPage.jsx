import { useState } from "react";
import { Container, Recetas, RecetasGrid } from "./LandingPage.elements";
import recetas from "./MyRecepies/recetas.json";
import { Link } from "react-router-dom";
import { GiDeathStar } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";

export function LandingPage() {
  const [recepies, setRecepies] = useState(recetas);

  return (
    <Container>
      <div className="description">
        <label className="label1">¡Bienvenido a Star</label>
        <label className="label2">Woks!</label>
        <p>¡Proba las recetas que mas le gustaron a Jabba el Hutt!</p>
      </div>
      <RecetasGrid>
        {recepies.map((receta) => (
          <div key={receta.id}>
            <Link to="/vista_receta">
              <img src={receta.url} alt="alt" width={350} height={300} />
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
