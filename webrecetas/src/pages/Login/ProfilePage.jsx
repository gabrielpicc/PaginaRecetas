import { useState } from "react";
import { NoLogUserCont } from "../NotLoguedPage.elements";
import { ProfileContainer, UserFields } from "./ProfilePage.elements";

export function ProfilePage() {
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const [lastName, setLastName] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const [pass, setPass] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  return (JSON.parse(localStorage.getItem("isLogued")) ? (
  <ProfileContainer>
    <UserFields>
      <label className='x'>Perfil</label>
      <label>Nombre: {name.name}</label>
      <label>Apellido: {lastName.last_name}</label>
      <label>Email: {email.email}</label>
      <label>Telefono: {phone.phone}</label>
      <button>Editar</button>
    </UserFields>
  </ProfileContainer>
  ) : (
    <NoLogUserCont>
      <div>Debes iniciar sesion para poder ver tus recetas</div>
    </NoLogUserCont>
  )
    
  );
}
