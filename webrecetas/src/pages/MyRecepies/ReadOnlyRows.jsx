import React from "react";

export function ReadOnlyRows({ receta, handleEditClick, handleDeleteClick }) {
  return (
    <tr>
      <td>{receta.titulo}</td>
      <td>{receta.dificultad}</td>
      <td>{receta.categorias + ""}</td>
      <td>{receta.calificacion}</td>
      <td>{receta.status}</td>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, receta)}
        >
          Editar
        </button>
        <button type="button" onClick={() => handleDeleteClick(receta.id)}>
          Delete
        </button>
      </div>
    </tr>
  );
}

export default ReadOnlyRows;
