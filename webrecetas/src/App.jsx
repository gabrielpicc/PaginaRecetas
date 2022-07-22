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
import RecoverPassPage from "./pages/RecoverPass/RecoverPassPage";
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <main>
        <Navbar className="NavMenu" />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/" element={<LandingPage />}></Route>

          <Route path="/registration" element={<RegistrationPage />}></Route>

          <Route path="/my_recepies/:id" element={<MyRecepiesPage />}></Route>

          <Route path="/upload_recepies" element={<LoadRecipePage />}></Route>

          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route
            path="/vista_receta/:receta_id"
            element={<VistaReceta />}
          ></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/recover_pass" element={<RecoverPassPage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
