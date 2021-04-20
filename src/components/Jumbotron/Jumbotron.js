import React from "react";

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Employee Directory</b></h1>
        <ul>
          <li>Click First for Alphabetical order</li>
          <li>Click Last for Alphabetical order</li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;