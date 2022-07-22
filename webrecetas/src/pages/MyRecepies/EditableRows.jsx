import React from "react";
import { useState } from "react";
import { updateRecepie, deleteDataCat, deleteDataIng } from "../../controller/miApp.controller";

export function EditableRows({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {

  const [title, setTitle] = useState(editFormData.titulo);
  const [dificultad, setDificultad] = useState(editFormData.dificultad);
  const [cats, setCats] = useState(editFormData.categorias);
  const [ings, setIngs] = useState(editFormData.ingredientes);
  const [status, setStatus] = useState(editFormData.status);
  
  const handleSaveClick = async function () {
    console.log(cats)
    console.log(ings)
    let datos = {
      receta_id: editFormData.id,
      titulo: title,
      dificultad: dificultad,
      categorias: cats,
      ingredientes: ings,
      status: status,
    }
    await deleteDataCat(editFormData.id)
    await deleteDataIng(editFormData.id)
    console.log(datos)
    let upRecepie = await updateRecepie(datos)
    if (upRecepie.rdo === 0) {
      window.location.reload()
    }
  }

  return (
    <tr>
      <td>
        {console.log("formdata",editFormData)}
        <input
          required="required"
          placeholder="Ingrese un titulo"
          name="titulo"
          value={editFormData.titulo}
          onChange={(e) => {setTitle(e.target.value); handleEditFormChange(e)}}
        />
      </td>
      <td>
        <select
          name="dificultad"
          placeholder="Dificultad"
          onChange={(e) => {setDificultad(e.target.value); handleEditFormChange(e)}}
          value={editFormData.dificultad}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese una categoria"
          name="categorias"
          onChange={(e) => {setCats(e.target.value); handleEditFormChange(e)}}
          value={editFormData.categorias}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese un ingrediente"
          name="ingredientes"
          onChange={(e) => {setIngs(e.target.value); handleEditFormChange(e)}}
          value={editFormData.ingredientes}
        />
      </td>
      <td>
        <select
          type="text"
          required="required"
          placeholder="Ingrese un status"
          name="status"
          onChange={(e) => {setStatus(e.target.value); handleEditFormChange(e)}}
          value={editFormData.status}
        >
        <option>Borrador</option>
        <option>Activo</option>
        </select>
      </td>
      <div>
        <button type="submit" onClick={handleSaveClick}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </tr>
  );
}

export default EditableRows;
