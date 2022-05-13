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

          <Route path="/profile" element={<ProfilePage/>}></Route>

          <Route path="/vista_receta" element={<VistaReceta />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
