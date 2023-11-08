import React from "react";

export default function Todo({ todo, handleDelete, handleComplete, handleEdit}) {
  return (
    <>
      <ul>
        {todo.map((e, i) => (
          <li
            key={i}
            style={{ textDecoration: e.complete ? "line-through" : "" }}
          >
            {e.name}
            <input type="checkbox" onChange={() => handleComplete(e.id)} />
            <i className="fa-solid fa-pen-to-square"
              onClick={() => handleEdit(e.id)}
            ></i>
            <i className="fa-regular fa-trash-can" onClick={() => handleDelete(e.id)}></i>
          </li>
        ))}
      </ul>
    </>
  );
}
