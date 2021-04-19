import React from "react";
import "./List.css"
function List(props) {
  return (
    <table>
        <thead>
        <tr className="row">
            <th className="col-md-3">Name</th>
            <th className="col-md-3">Photo</th>
            <th className="col-md-3">Email</th>
            <th className="col-md-3">Phone Number</th>
        </tr>
        </thead>
        <tbody>
      {props.results.map(result => (
        <tr className="row background" key={result.id}>
            <td className="col-md-2 txt-color">{result.name.first} {result.name.last}</td>
            <td className="col-md-3"><img src={result.picture.large} alt="emp-img"/></td>
            <td className="col-md-4">{result.email}</td>
            <td className="col-md-3">{result.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default List;
