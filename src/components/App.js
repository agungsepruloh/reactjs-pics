import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  // arrow function
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    // promise (like await), when the fetch data get the result, then execute this method
    // .then(response => console.log(response.data.results));

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* Invoking callbacks in children */}
        {/* call back function to its children / passing callback function to its child */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
