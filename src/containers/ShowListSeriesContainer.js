import React from "react";
import { connect } from "react-redux";
import ShowListSeries from "../components/ShowListSeries";
import * as PropTypes from "prop-types";

class ShowListSeriesContainer extends React.Component {
  render() {
    const { received_data } = this.props;
    console.log("received_data.dataResult", received_data.dataResult);
    return (
      <ShowListSeries
        data={received_data.data}
        isRedirect={received_data.isRedirect}
      />
    );
  }
}

ShowListSeriesContainer.propsTypes = {
  isRedirect: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = store => ({
  received_data: store.received_data
});


export default connect(mapStateToProps)(ShowListSeriesContainer);
