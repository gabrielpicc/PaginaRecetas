import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/LoginPage";
import Navbar from "./componentes/NavBar/Navbar";
import './index.css'
import { RegistrationPage } from "./pages/Login/RegistrationPage";
import { MyRecepiesPage } from "./pages/MyRecepies/MyRecepiesPage";
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegistrationPage/>}></Route>
          <Route path="/my_recepies" element={<MyRecepiesPage/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
