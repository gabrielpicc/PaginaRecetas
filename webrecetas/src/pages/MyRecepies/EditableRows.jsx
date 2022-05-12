import React from "react";

export function EditableRows({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese un titulo"
          name="titulo"
          value={editFormData.titulo}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="dificultad"
          placeholder="Dificultad"
          onChange={handleEditFormChange}
          value={editFormData.dificultad}
        >
          <option>Facil</option>
          <option>Media</option>
          <option>Dificil</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese una categoria"
          name="categorias"
          onChange={handleEditFormChange}
          value={editFormData.categorias}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese una calificacion"
          name="calificacion"
          onChange={handleEditFormChange}
          value={editFormData.calificacion}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingrese un status"
          name="status"
          onChange={handleEditFormChange}
          value={editFormData.status}
        />
      </td>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </tr>
  );
}

export default EditableRows;
