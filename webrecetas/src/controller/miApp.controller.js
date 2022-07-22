import urlWebServices from "../controller/webServices.js";

export const login = async function (login) {
  //url webservices
  let url = urlWebServices.login;
  const formData = new URLSearchParams();
  formData.append("email", login.email);
  formData.append("contraseña", login.password);
  try {
    let response = await fetch(url, {
      method: "Post",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      mode: "cors",
      body: formData,
    });

    let rdo = response.status;
    let data = await response.json();

    switch (rdo) {
      case 200: {
        //guardo token
        localStorage.setItem("x", data.token);
        //guardo usuario logueado
        let user = data.user;
        localStorage.setItem("email", user.email);
        localStorage.setItem("nombre", user.nombre);
        localStorage.setItem("apellido", user.apellido);
        localStorage.setItem("telefono", user.telefono);
        localStorage.setItem("id", user.id);

        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      case 401: {
        return { rdo: 1, mensaje: "Contraseña incorrecta" };
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
  formData.append("pregunta", register.pregunta); //nuevo
  formData.append("respuesta", register.respuesta);

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    localStorage.setItem("email", register.email);
    localStorage.setItem("nombre", register.nombre);
    localStorage.setItem("apellido", register.apellido);
    localStorage.setItem("telefono", register.telefono);
    let rdo = response.status;
    let data = await response.json();
    localStorage.setItem("id", data.user.id);
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
  try {
    let response = await fetch(url, {
      method: "get",
      mode: "cors",
    });

    console.log(response);
    let rdo = response.status;
    let data = await response.json();
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

export const updateUser = async function (profile) {
  //url webservices
  let url = urlWebServices.updateUser + "/" + profile.id;
  const formData = new URLSearchParams();
  formData.append("nombre", profile.nombre);
  formData.append("apellido", profile.apellido);
  formData.append("telefono", profile.telefono);
  formData.append("email", profile.email);
  console.log(formData);
  try {
    let response = await fetch(url, {
      method: "PUT", // or 'PUT'
      mode: "cors",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x")}`,
      },
      body: formData,
    });

    localStorage.setItem("email", profile.email);
    localStorage.setItem("nombre", profile.nombre);
    localStorage.setItem("apellido", profile.apellido);
    localStorage.setItem("telefono", profile.telefono);
    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
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

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    let rdo = response.status;
    switch (rdo) {
      case 200: {
        return { rdo: 0, mensaje: "La receta se cargo con exito" }; //correcto
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
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    let rdo = response.status;
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
  let url =
    urlWebServices.getCalificacion + "?receta_id=" + calificacion.receta_id;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("receta_id", calificacion.receta_id);

  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
    });
    let data = await response.json();
    return data;
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
        Accept: "application/x-www-form-urlencoded",
        Origin: "http://localhost:3000",
      },
    });
    let data = response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getRecepieById = async function (id) {
  //url webservices
  let url = urlWebServices.getRecepieById + "/" + id;
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Origin: "http://localhost:3000/",
      },
    });
    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return { rdo: 0, datos: data, mensaje: "Ok" }; //correcto
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

export const getRecepieByUserId = async function (datos) {
  //url webservices
  let url = urlWebServices.getRecepieByUserId + "/" + datos;
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
    });
    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return { rdo: 0, datos: data, mensaje: "Ok" }; //correcto
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

export const deleteRecepie = async function (receta) {
  let url = urlWebServices.deleteRecepie + "/" + receta;
  try {
    let response = await fetch(url, {
      method: "DELETE", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
    });
    let rdo = response.status;
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

export const updateRecepie = async function (datos) {
  let url = urlWebServices.updateRecepie;
  const formData = new URLSearchParams();
  formData.append("receta_id", datos.receta_id);
  formData.append("titulo", datos.titulo);
  formData.append("dificultad", datos.dificultad);
  formData.append("categorias", datos.categorias);
  formData.append("ingredientes", datos.ingredientes);
  formData.append("status", datos.status);
  try {
    let response = await fetch(url, {
      method: "PUT", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
      body: formData,
    });
    let rdo = response.status;
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

export const deleteDataCat = async function (receta_id) {
  let url = urlWebServices.deleteDataCat + "/" + receta_id;
  try {
    let response = await fetch(url, {
      method: "delete", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
    });
    let rdo = response.status;
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

export const deleteDataIng = async function (receta_id) {
  let url = urlWebServices.deleteDataIng + "/" + receta_id;
  try {
    let response = await fetch(url, {
      method: "delete", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("x")}`,
        Origin: "http://localhost:3000/",
      },
    });
    let rdo = response.status;
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

export const getrecetabyingredient = async function (recetabyingredient) {
  let url = urlWebServices.getrecetabyingredient + "/" + recetabyingredient;
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return data; //correcto
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

export const getRecetabyCategory = async function (category) {
  let url = urlWebServices.getRecetabyCategory + "/" + category;
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return data; //correcto
      }
      default: {
        //otro error
        return {
          rdo: 1,
          mensaje: "No pudimos encontrar la receta con el parametro",
        };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getrecetabytitulo = async function (recetabytitulo) {
  //LISTO
  //url webservices
  let url = urlWebServices.getrecetabytitulo + "?titulo=" + recetabytitulo;
  //armo json con datos
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return data; //correcto
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

export const getrecetabydificultad = async function (rectabydificultad) {
  //url webservices
  let url =
    urlWebServices.getrecetabydificultad + "?dificultad=" + rectabydificultad;
  //armo json con datos
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return data; //correcto
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

//recuperacion contraseña

export const getDatosPregunta = async function (email) {
  //url webservices
  let url = urlWebServices.getDatosPregunta + "?email=" + email;
  //armo json con datos
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return data; //correcto
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

export const establecerNuevaContraseña = async function (datos) {
  //url webservices
  let url = urlWebServices.establecerNuevaContraseña;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("contraseña", datos.contraseña);
  formData.append("email", datos.email);

  try {
    let response = await fetch(url, {
      method: "put", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000/",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    let rdo = response.status;
    let data = await response.json();
    switch (rdo) {
      case 200: {
        return { rdo: 0, mensaje: "la contraseña se cambio correctamente" }; //correcto
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

//imagenes

export const subirImagen = async function (img) {
  let url = urlWebServices.subirImagen;
  const formData = new URLSearchParams();
  formData.append("email", img.email);
  formData.append("nombreImagen", img.imagen);
  formData.append("receta_id", img.receta_id);

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        //'x-access-token': localStorage.getItem('x'),
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    let rdo = response.status;
    let data = await response.json();
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export const uploadFileImg = async function (file, nombre) {
  //url webservices

  let url = urlWebServices.uploadFileImg;
  const formData = new FormData();
  //agrego archivos para subir
  formData.append("files", file, nombre);

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/form-data",
        //'x-access-token': localStorage.getItem('x'),
        Origin: "http://localhost:3000",
        //'Content-Type': 'application/form-data'
      },
      body: formData,
    });

    let archivos = await response.json();
    return archivos;
  } catch (err) {
    alert("Error uploading the files");
  }
};

export const getImagenesByUser = async function () {
  //url webservices
  let url = urlWebServices.getImgUser;
  const formData = new URLSearchParams();
  formData.append("email", localStorage.getItem("email"));

  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("x"),
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    if (response.status === 200) {
      let data = await response.json();
      let listaImg = data.data.docs;
      return listaImg;
    } else {
      let vacio = [];
      return vacio;
    }
  } catch (error) {
    console.log("error", error);
  }
};
