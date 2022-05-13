import { useState } from "react";
import { ProfileContainer, UserFields, } from "./ProfilePage.elements";

export function ProfilePage() {

  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("userInfo")).name
  );

  const [lastName, setLastName] = useState(
    JSON.parse(localStorage.getItem("userInfo")).lastName
  );

  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("userInfo")).email
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("userInfo")).phone
  );

  const [pass, setPass] = useState(
    JSON.parse(localStorage.getItem("userInfo")).pass
  );

  return (
    <ProfileContainer>
      <UserFields>
        <label>Bienvenido {name}</label>
        <label>Bienvenido {lastName}</label>
        <label>Bienvenido {email}</label>
        <label>Bienvenido {phone}</label>
        <label>Bienvenido {pass}</label>
      </UserFields>
    </ProfileContainer>
  );

}
