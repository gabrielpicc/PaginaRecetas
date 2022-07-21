import { Fragment, useState } from "react";
import { NoLogUserCont } from "../NotLoguedPage.elements";
import { ProfileContainer, UserFields } from "./ProfilePage.elements";
import { updateUser } from "../../controller/miApp.controller";
import { render } from "@testing-library/react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export function ProfilePage() {

  const [name, setName] = useState(localStorage.getItem("nombre"));

  const [lastName, setLastName] = useState(localStorage.getItem("apellido"));

  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setPhone] = useState(localStorage.getItem("telefono"));

  const [usuarioValido, setUsuarioValido] = useState(false);

  const [editable, setEditable] = useState(false);

  const updateUserInfo = async function () {
    let datos = {
      id: parseInt(localStorage.getItem("id")),
      nombre: name,
      apellido: lastName,
      email: email,
      telefono: phone,
    };
    let upUser = await updateUser(datos);
    if (upUser.rdo === 0) {
      setUsuarioValido(true);
    }
    if (upUser.rdo === 1) {
      alert(upUser.mensaje);
    }
  };

  const redirect = () => {
    if (usuarioValido) {
      return <Navigate to="/" />;
    }
  };

  const handleClick = (event) => {
    setEditable(false);
    updateUserInfo();
  };

  const handleClickFalse = (event) => {
    setEditable(true)
  }

  return localStorage.getItem("email") !== null ? (
    editable === false ? (
      <ProfileContainer>
        <UserFields>
          <label className="x">Perfil</label>
          <label>Nombre: {name}</label>
          <label>Apellido: {lastName}</label>
          <label>Email: {email}</label>
          <label>Telefono: {phone}</label>
          <button onClick={handleClickFalse}>Editar</button>
        </UserFields>
      </ProfileContainer>
    ) : (
      <ProfileContainer>
        <UserFields>
          <input
            type="text"
            required="required"
            placeholder="Ingrese su nombre"
            name="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            required="required"
            placeholder="Ingrese su apellido"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <input
            type="text"
            required="required"
            placeholder="Ingrese su telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <button onClick={handleClick}>Guardar</button>
        </UserFields>
      </ProfileContainer>
    )
  ) : (
    <NoLogUserCont>
      <div>Debes iniciar sesion para poder ver tus recetas</div>
    </NoLogUserCont>
  );
}
