import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

const List = () => {
  const todos = useSelector((state) => state.todos.data);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="mr-4 text-white text-xl">{todo.message}</span>
            <button
              className=" mt-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400"
              onClick={() => handleDelete(todo.id)}
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
