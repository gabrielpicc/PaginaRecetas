import React from "react";

export function ReadOnlyRows({
  receta,
  handleEditClick,
  handleDeleteClick,
  ingredientes,
  categorias,
}) {
  return (
    <tr>
      <td>{receta.titulo}</td>
      <td>{receta.dificultad}</td>
      <td>{categorias + ""}</td>
      <td>{ingredientes + ""}</td>
      <td>{receta.status}</td>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, receta)}
        >
          Editar
        </button>
        <button onClick={(event) => handleDeleteClick(event, receta)}>
          Delete
        </button>
      </div>
    </tr>
  );
}

export default ReadOnlyRows;
