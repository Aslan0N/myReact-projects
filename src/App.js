import React from "react";
import { BookProvider } from "./Context/BookContext";
import AppRouter from "./Router/AppRouter";

const App = () => {

  
  return (
    <BookProvider>
      <AppRouter />
    </BookProvider>
  );
};

export default App;
