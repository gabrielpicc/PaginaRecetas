import urlWebServices from "../controller/webServices.js";

export const login = async function (login) {
  //url webservices
  let url = urlWebServices.login;
  const formData = new URLSearchParams();
  formData.append("email", login.email);
  formData.append("contraseña", login.password);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "Post",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        "Origin": "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      mode: "cors",
      body: formData,
    });

    //console.log(formData);
    let rdo = response.status;
   // console.log("response", response);
    let data = await response.json();
   // console.log("jsonresponse", data);
    //console.log(data.token);
    switch (rdo) {
      case 200: {
        //guardo token
        localStorage.setItem("x", data.token);
        //guardo usuario logueado
        let user = data.user;
        localStorage.setItem("email", user.email);

        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const register = async function (register) {
  //url webservices
  let url = urlWebServices.register;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("nombre", register.nombre);
  formData.append("apellido", register.apellido);
  formData.append("telefono", register.telefono);
  formData.append("email", register.email);
  formData.append("contraseña", register.password);
  console.log(url)

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        "Origin": "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        localStorage.setItem("x", data.token);
        //guardo usuario logueado
        let user = data.user;
        localStorage.setItem("email", user.email);
        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      case 422: {
        //error general
        return { rdo: 1, mensaje: "El mail ingresado ya está en uso" };
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getuser = async function (login) {
  //url webservices
  let url = urlWebServices.getuser;
  // var formBody = [
  //   encodeURIComponent("email") + "=" + encodeURIComponent(login.email),
  //   encodeURIComponent("contraseña") + "=" + encodeURIComponent(login.password),
  // ];
  // console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "get",
      mode: "cors",
    });

    console.log(response);
    let rdo = response.status;
    //console.log("response", response);
    let data = await response.json();
    //console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        //guardo token
        localStorage.setItem("x", data.loginUser.token);
        //guardo usuario logueado
        let user = data.loginUser.user;
        localStorage.setItem("nombre", user.name);
        localStorage.setItem("email", user.email);

        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      case 202: {
        //error mail
        return {
          rdo: 1,
          mensaje: "El mail ingresado no existe en nuestra base.",
        };
      }
      case 203: {
        //error password
        return { rdo: 1, mensaje: "La contraseña no es correcta." };
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
