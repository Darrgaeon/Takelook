import React from "react";
import { Redirect } from "react-router-dom";
import { Table } from "reactstrap";
import { testNumberEpisode } from "../utils/TestNumberEpisode";
import moment from "moment";
import { cleanTextFromTags } from "../utils/СleanTextFromTags"
import * as PropTypes from "prop-types";


class ShowListSeries extends React.Component {
  render() {
    const {isRedirect, data} = this.props;

    if (isRedirect === "/") {
      return <Redirect to={{pathname: "/"}} />;
    }

    return (
      <div className="info-result">
        <div className="container">
          <h1>{data.name}</h1>
          <div className="info">
            <div className="image-wrapper">
              <img src={data.image.original} alt={data.name}/>
            </div>
            <div className="block-info"><b>Description:</b> {cleanTextFromTags(data.summary)}</div>
          </div>
        </div>

        <div>
          <h2>Previous Episodes</h2>
          <Table>
            <thead>
              <tr>
                <th>Episode Name</th>
                <th>Airdate</th>
                <th>Summary</th>
              </tr>
            </thead>
            {data._embedded.episodes.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{item.season}x{testNumberEpisode(item.number)}: <b>{item.name}.</b> <a href={item.url}>Episode {index + 1}</a></td>
                    <td>{moment(item.airdate).locale("en").format("MMM DD, YYYY")}</td>
                    <td>{item.summary === null ? "The description has not yet come out" : cleanTextFromTags(item.summary)}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );

  }
}

ShowListSeries.propsTypes = {
  isRedirect: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};


export default ShowListSeries;
