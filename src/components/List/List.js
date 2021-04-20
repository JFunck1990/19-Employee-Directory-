import React from "react";
import "./List.css"
function List(props) {
  return (
    <table>
        <thead>
        <tr className="row">
            <th className="firstName col-md-2" onClick={props.sortByFirstName}> First Name</th>
            <th className="lastName col-md-3" onClick={props.sortByLastName}> Last Name</th>
            <th className="photo col-md-2">Photo</th>
            <th className="email col-md-3">Email</th>
            <th className="phone col-md-2">Phone Number</th>
        </tr>
        </thead>
        <tbody>
      {props.results.map(result => (
        <tr className="row background" key={result.login.uuid}>
            <td className="background col-md-2 txt-color">{result.name.first}</td>
            <td className="background col-md-3">{result.name.last}</td>
            <td className="background col-md-2"><img src={result.picture.large} alt="emp-img"/></td>
            <td className="background col-md-3">{result.email}</td>
            <td className="background col-md-2">{result.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default List;
