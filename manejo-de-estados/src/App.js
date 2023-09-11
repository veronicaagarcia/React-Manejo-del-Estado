import React from "react";
// import { UseState } from './UseState.js';
import { UseReduce } from "./UseReduce.js";
import { ClassState } from './ClassState.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UseState name= "UseState"/> */}
      <UseReduce name= "UseReducer" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
