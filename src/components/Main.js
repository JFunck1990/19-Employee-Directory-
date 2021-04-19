import { Component } from "react";
import API from "../utils/API";

class searchResultContainer extends Component {
state = {
  search: "",
  results: []
}

componentDidMount(){
 console.log("this is Api" + API);
}

  searchEmp = query => {
  API.search(query)
    .then(res => this.setState({ results: res.data.data }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};


handleFormSubmit = event => {
  event.preventDefault();
  this.searchMovies(this.state.search);
};



render() {
  return (
    <div>

    </div>
  );
}



}

export default  searchResultContainer;