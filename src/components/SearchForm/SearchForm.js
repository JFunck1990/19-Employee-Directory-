import React from "react";

const SearcForm = (props) => {

  return (
    <form>
    <div >
      <div>

        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder='Search for Employee'
          id="search"
          key={props.key}
        />

        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </div>
  </form>
  );
}
export default SearcForm;