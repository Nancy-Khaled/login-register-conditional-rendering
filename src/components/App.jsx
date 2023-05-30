import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <Form isRegistered={userIsRegistered} />
      </div>
    </div>
  );
}

export default App;