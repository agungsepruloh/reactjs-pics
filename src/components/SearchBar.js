import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    // keep the form or the browser from trying to submit the form automatically and in the process refresh the page
    event.preventDefault();

    // call back function from the props
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* from callback function */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search: </label>
            {/* call back function not from the parent or props */}
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
