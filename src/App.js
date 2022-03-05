import React from "react";
import './App.css';
import AllCardsPage from "./pages/AllCards";
 
import Datas from "./components/Datas";

function App() {

  return (
    <div className="App">
      <Datas /> 
     
      <AllCardsPage />
    </div>
  );
}

export default App;
