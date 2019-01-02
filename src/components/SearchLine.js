import React from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Start_API } from "../constants/Default";

class SearchLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quest: ""
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChangeSearch(e) {
    e.preventDefault();

    this.setState({
      quest: this.q.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const API = Start_API + this.state.quest;
    this.props.loadData(API);
  }

  validate() {
    const { quest } = this.state;
    return quest.length === 0 ? false : true;
  }


  render() {
    const isRedirect = this.props.isRedirect;

    if (isRedirect === "list") {
      return <Redirect to={{pathname: "/list"}} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search">
          <input
            ref={(quest) => {this.q = quest;}}
            onChange={this.handleChangeSearch}
            type="search"
            name="search"
            placeholder="Search Shows"
          />
          <button
            disabled={!this.validate()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchLine;
