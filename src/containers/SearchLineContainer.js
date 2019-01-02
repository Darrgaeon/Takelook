import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchLine from "../components/SearchLine";
import { loadData } from "../actions/SearchActions";
import * as PropTypes from "prop-types";

class SearchLineContainer extends React.Component {
  render() {
    const {received_data} = this.props;
    return (
      <SearchLine
        loadData={this.props.loadData}
        isRedirect={received_data.isRedirect}
      />
    );
  }
}

SearchLineContainer.propsTypes = {
  isRedirect: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  received_data: store.received_data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadData
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchLineContainer);
