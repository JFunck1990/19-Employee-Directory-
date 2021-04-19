import React from "react";

const SearcForm = (props) => {

  return (
    <form>
    <div >
      <div>

        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          placeholder='Search for Employee'
          id="search"
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