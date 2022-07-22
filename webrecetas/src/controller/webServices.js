const urlApi = "http://localhost:8000/";
console.log("url", urlApi);

const urlWebServices = {
  login: urlApi + "api/login",
  register: urlApi + "api/signup",
  getuser: urlApi + "api/usuario/find",
  updateUser: urlApi + "api/usuario/update",

  //recetas
  createRecepie: urlApi + "api/receta/create",
  getAllRecepies: urlApi + "api/receta/list",
  getRecepieById: urlApi + "api/receta/receta_id",
  getRecepieByUserId: urlApi + "api/receta/find",
  deleteRecepie: urlApi + "api/receta/delete",
  updateRecepie: urlApi + "api/receta/update_recepie",
  deleteDataCat: urlApi + "api/receta/cats",
  deleteDataIng: urlApi + "api/receta/ings",
  getrecetabydificultad: urlApi + "api/receta/dificultad",
  getrecetabytitulo: urlApi + "api/receta/titulo",
  getrecetabyingredient: urlApi + "api/receta/ingredient",
  getRecetabyCategory: urlApi + "api/receta/categoria",

  //calificacion
  updateCalificacion: urlApi + "api/receta/calificacion/update",
  getCalificacion: urlApi + "api/receta/calificacion",

  //recover pass
  getDatosPregunta: urlApi + "api/usuario/obtenerDatos",
  establecerNuevaContraseña: urlApi + "api/usuario/cambiarPass",
};

export default urlWebServices;
