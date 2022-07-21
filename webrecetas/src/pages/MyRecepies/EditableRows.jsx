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
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </tr>
  );
}

export default EditableRows;
