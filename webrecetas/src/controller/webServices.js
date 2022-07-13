const urlApi = "http://localhost:8000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/login",
    register:urlApi +"api/signup",
    getuser: urlApi+"api/usuario/find"
    // uploadFileImg: urlApi + "utils/uploadImg",
    // guardarImgUser: urlApi + "api/users/guardarImgUser",
    // getImgUser: urlApi + "api/users/imgUserByMail",
    // uploadFileImg: urlApi + "api/users/uploadImg",
}

export default urlWebServices;