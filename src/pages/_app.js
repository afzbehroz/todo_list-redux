import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./components/AddTodo";
import List from "./List/List";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-pink-500">
        <Component {...pageProps} />

        <AddTodo />

        <List />
      </div>
    </Provider>
  );
}
