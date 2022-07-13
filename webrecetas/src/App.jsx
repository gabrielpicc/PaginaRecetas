import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/LoginPage";
import Navbar from "./componentes/NavBar/Navbar";
import "./index.css";
import { RegistrationPage } from "./pages/Login/RegistrationPage";
import { MyRecepiesPage } from "./pages/MyRecepies/MyRecepiesPage";
import { LoadRecipePage } from "./pages/LoadRecipe/LoadRecipePage";
import VistaReceta from "./pages/Vista/VistaReceta";
import { ProfilePage } from "./pages/Login/ProfilePage";
import { SearchPage } from "./pages/Search/SearchPage";
import { Footer } from "./App.elements";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          {/* {JSON.parse(localStorage.getItem("isLogued")) === false && (
            <Route path="/login" element={<LoginPage />}></Route>
          )} */}
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/" element={<LandingPage />}></Route>

          <Route path="/registration" element={<RegistrationPage />}></Route>

          <Route path="/my_recepies" element={<MyRecepiesPage />}></Route>

          <Route path="/upload_recepies" element={<LoadRecipePage />}></Route>

          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/vista_receta" element={<VistaReceta />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </main>
      {/* <Footer>
        <div>Copyright © StarWoks</div>
        <div>
          <a href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a href="mailto:gpiccini@uade.edu.ar">
            <SiGmail />
          </a>

          <a href="https://twitter.com/home">
            <BsTwitter />
          </a>
        </div>
      </Footer> */}
    </Router>
  );
}