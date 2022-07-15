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
    console.log(data.user.id);
    switch (rdo) {
      case 200: {
        //guardo token
        localStorage.setItem("x", data.token);
        //guardo usuario logueado
        let user = data.user;
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.id);

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


//RECETAS

export const createRecepie = async function (register) {
  //url webservices
  let url = urlWebServices.createRecepie;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("titulo", register.titulo);
  formData.append("dificultad", register.dificultad);
  formData.append("status", register.status);
  formData.append("ingredientes", register.ingredientes);
  formData.append("categorias", register.categorias);
  formData.append("procedimiento", register.procedimiento);
  formData.append("usuario_id", register.usuario_id);
  console.log(register)
  // console.log(url)

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${localStorage.getItem("x")}`,
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

//calificacion

export const updateCalificacion = async function (calificacion) {

  //url webservices
  let url = urlWebServices.updateCalificacion;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("calificacion", calificacion.calificacion);
  formData.append("receta_id", calificacion.receta_id);
  formData.append("user", calificacion.user);

  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${localStorage.getItem("x")}`,
        "Origin": "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    let rdo = response.status;
    //console.log("response", response);
    let data = await response.json();
    //console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
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

export const getCalificacion = async function (calificacion) {
  //url webservices
  let url = urlWebServices.getCalificacion + '?receta_id=' + calificacion.receta_id;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("receta_id", calificacion.receta_id);
  console.log(url + '?receta_id' + calificacion.receta_id)

  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${localStorage.getItem("x")}`,
        "Origin": "http://localhost:3000/",
      },
    });
    //console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    return data
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllRecepies = async function () {
  //url webservices
  let url = urlWebServices.getAllRecepies;
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        "Origin": "http://localhost:3000/",
      },
    });
    //console.log("response", response);
    let data = response.json();
    //console.log("jsonresponse", data);
    return data
  } catch (error) {
    console.log("error", error);
  }
};

export const getRecepieById = async function (datos) {
  //url webservices
  let url = urlWebServices.getRecepieById + '/' + datos.receta_id;
  console.log(url)
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        "Accept": "application/x-www-form-urlencoded",
        "Origin": "http://localhost:3000/",
      },
    });
    //console.log("response", response);
    let data = response.json();
    //console.log("jsonresponse", data);
    return data
  } catch (error) {
    console.log("error", error);
  }
};
