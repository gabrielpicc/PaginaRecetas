const urlApi = "http://localhost:8000/";
console.log("url", urlApi);

const urlWebServices = {
  login: urlApi + "api/login",
  register: urlApi + "api/signup",
  getuser: urlApi + "api/usuario/find",

  //recetas
  createRecepie: urlApi + "api/receta/create",
  getAllRecepies: urlApi + "api/receta/list",
  getRecepieById: urlApi + "api/receta/receta_id",


  //calificacion
  updateCalificacion: urlApi + "api/receta/calificacion/update",
  getCalificacion: urlApi + "api/receta/calificacion",
};

export default urlWebServices;
