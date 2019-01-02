import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ShowSearchResultList from "../components/ShowSearchResultList";
import { loadResultData } from "../actions/SearchActions";
import * as PropTypes from "prop-types";

class ShowSearchResultListContainer extends React.Component {
  render() {
    const {received_data} = this.props;

    return (
      <ShowSearchResultList
        data={received_data.data}
        isRedirect={received_data.isRedirect}
        loadResultData={this.props.loadResultData}
      />
    );
  }
}

ShowSearchResultListContainer.propsTypes = {
  isRedirect: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loadResultData: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  received_data: store.received_data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadResultData
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowSearchResultListContainer);
