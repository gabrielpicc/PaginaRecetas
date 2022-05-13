import { useState, Fragment } from "react";
import Navbar from "../../componentes/NavBar/Navbar";
import { NoLogUserCont, Wrapper } from "../NotLoguedPage.elements";
import EditableRows from "./EditableRows";
import { Container } from "./MyRecepiesPage.elements";
import ReadOnlyRows from "./ReadOnlyRows";
import recetas from "./recetas.json";

export function MyRecepiesPage() {
  const [recepies, setRecepies] = useState(recetas);
  const [editRecepieId, setEditRecepiId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRecepie = {
      id: editRecepieId,
      titulo: editFormData.titulo,
      dificultad: editFormData.dificultad,
      categorias: editFormData.categorias,
      calificacion: editFormData.calificacion,
      status: editFormData.status,
    };

    const newRecepies = [...recepies];

    const index = recepies.findIndex((receta) => receta.id === editRecepieId);

    newRecepies[index] = editedRecepie;

    setRecepies(newRecepies);
    setEditRecepiId(null);
  };

  const [editFormData, setEditFormData] = useState({
    titulo: "",
    dificultad: "",
    categorias: "",
    calificacion: "",
    status: "",
  });

  const handleEditClick = (event, receta) => {
    event.preventDefault();
    setEditRecepiId(receta.id);

    const formValues = {
      titulo: receta.titulo,
      dificultad: receta.dificultad,
      categorias: receta.categorias,
      calificacion: receta.calificacion,
      status: receta.status,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditRecepiId(null);
  };

  const handleDeleteClick = (recepiId) => {
    const newRecepies = [...recepies];

    const index = recepies.findIndex((receta) => receta.id === recepiId);

    newRecepies.splice(index, 1);

    setRecepies(newRecepies);
  };

  const getData = () => {
    localStorage.getItem("user");
  };

  return JSON.parse(localStorage.getItem("isLogued")) ? (
    <Container>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <tbody>
            {recepies
              .filter((receta) => receta.owner === localStorage.getItem("user"))
              .map((receta) => (
                <Fragment>
                  {editRecepieId === receta.id ? (
                    <EditableRows
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRows
                      receta={receta}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
          </tbody>
        </table>
      </form>
    </Container>
  ) : (
    <NoLogUserCont>
      <div>Debes iniciar sesion para poder ver tus recetas</div>
    </NoLogUserCont>
  );
}
