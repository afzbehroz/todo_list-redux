import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className=" font-semibold mb-4 text-white text-2xl">Add Todo</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.userInput.value;
          dispatch(addTodo(input));
          event.target.userInput.value = "";
        }}
      >
        <input
          type="text"
          name="userInput"
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400"
        >
          Add
        </button>
      </form> 
    </div>
  );
};

export default AddTodo;
