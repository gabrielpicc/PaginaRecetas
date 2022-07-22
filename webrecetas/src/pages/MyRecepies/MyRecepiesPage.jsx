import { useState, Fragment } from "react";
import Navbar from "../../componentes/NavBar/Navbar";
import { NoLogUserCont, Wrapper } from "../NotLoguedPage.elements";
import EditableRows from "./EditableRows";
import { Container } from "./MyRecepiesPage.elements";
import ReadOnlyRows from "./ReadOnlyRows";
import recetas from "./recetas.json";
import {
  getRecepieByUserId,
  getCalificacion,
  deleteRecepie,
} from "../../controller/miApp.controller";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../componentes/NavBar/Loading";
import { Label } from "reactstrap";

export function MyRecepiesPage() {
  const [recepies, setRecepies] = useState(recetas);
  const [editRecepieId, setEditRecepiId] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [numCalif, setNumCalif] = useState();


  useEffect(() => {
    let isSuscribed = true;

    const recuperaRecetaPorUsuario = async () => {
      let data = await getRecepieByUserId(localStorage.getItem("id"));
      let json_data = await data.datos;
      if (isSuscribed) {
        setData(json_data);
      }
    };

    const changeLoadingState = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    recuperaRecetaPorUsuario().catch(console.error);
    changeLoadingState();
    return () => (isSuscribed = false);
  }, [id]);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRecepie = {
      id: editRecepieId,
      titulo: editFormData.titulo,
      dificultad: editFormData.dificultad,
      categorias: editFormData.categorias,
      ingredientes: editFormData.ingredientes,
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
    id: "",
    titulo: "",
    dificultad: "",
    categorias: "",
    ingredientes: "",
    status: "",
  });

  const handleEditClick = (event, receta) => {
    event.preventDefault();
    setEditRecepiId(receta.id);
    const formValues = {
      id: receta.id,
      titulo: receta.titulo,
      dificultad: receta.dificultad,
      categorias: transformData(receta.categoria, true),
      ingredientes: transformData(receta.ingredientes, false),
      status: receta.status,
    };
    setEditFormData(formValues);
  };

  const changeLoadingState = () => {
    setTimeout(() => {
      setLoading(false);
      window.location.reload()
    }, 1000);
  };

  const handleDeleteClick = async function(event, receta) {
    await deleteRecepie(receta.id)
    setLoading(true);
    changeLoadingState();
  }

  const transformData = (datos, bool) => {
    let stringData = [];
    if (bool) {
      datos.forEach((dato) => {
        stringData.push(dato.descripcion);
      });
    } else {
      datos.forEach((dato) => {
        stringData.push(dato.ingrediente_descr);
      });
    }
    return stringData.join();
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

  if (loading) {
    return <Loading />;
  } else {
    return JSON.parse(localStorage.getItem("email") !== null) ? (
      <Container>
        <form onSubmit={handleEditFormSubmit}>
          <Label style={{fontSize: "1.35rem"}}>Al editar categoria e ingrediente: Ingresar los valores separados por "coma" (,) y sin espacios</Label>
          <table>
            <tbody>
              {data.map((receta) => (
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
                      ingredientes={transformData(receta.ingredientes, false)}
                      categorias={transformData(receta.categoria, true)}
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
}
