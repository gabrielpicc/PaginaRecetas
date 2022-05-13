import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/LoginPage";
import Navbar from "./componentes/NavBar/Navbar";
import './index.css'
import { LoadRecipePage } from "./pages/LoadRecipe/LoadRecipePage";
import VistaReceta from "./pages/Vista/VistaReceta";
import { SearchPage } from "./pages/Search/SearchPage";
;
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/upload_recepies" element={<LoadRecipePage />}></Route>
          <Route path="/vista_receta" element={<VistaReceta/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
