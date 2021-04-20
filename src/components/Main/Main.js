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

  //if you click first name it will sort
  sortByFirstName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }
  sortByLastName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }


  render() {
    return (
      <div>
        <SearcForm></SearcForm>
        <List results={this.state.results} sortByFirstName={this.sortByFirstName} sortByLastName={this.sortByLastName}></List>
      </div>
    );
  }
}

export default searchResultContainer;
