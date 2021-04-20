import { Component } from "react";
import SearcForm from "../SearchForm/SearchForm";
import List from "../List/List"
import API from "../../utils/API";

class searchResultContainer extends Component {
  state = {
    sortOrder: "",
    search: "",
    results: [],
  };

  componentDidMount() {
    //console.log("This is Api" + API);

    API.search()
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data.results})
      }).catch((err) => console.log(err));
  }

  /*searchEmp = (query) => {
    API.search()
      .then((res) => {
        console.log(res);
        //this.setState({ results: res.data.data })
      }).catch((err) => console.log(err));
  };*/

  handleInputChange = (event) => {
    console.log("This is the Api" + API);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmp(this.state.search);
  };

  render() {
    return (
      <div>
        <SearcForm></SearcForm>
        <List results={this.state.results}></List>
      </div>
    );
  }
}

export default searchResultContainer;
