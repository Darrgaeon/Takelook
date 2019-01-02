import React from "react";
import { Redirect } from "react-router-dom";
import { Start_API_Result } from "../constants/Default";


class ShowSearchResultList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeResult = this.handleChangeResult.bind(this);
  }


  handleChangeResult(name) {
    const API = Start_API_Result + name + "&embed=episodes";
    this.props.loadResultData(API);
  }


  render() {
    const {isRedirect, data} = this.props;

    if (isRedirect === "/") {
      return <Redirect to={{pathname: "/"}} />;
    }

    if (isRedirect === "result") {
      return <Redirect to={{pathname: "/result"}} />;
    }

    return (data.length === 1)
      ? (
        <div className="list-result">
          <h1 className="title">Result search</h1>
            <div className="result">
              <div className="image-wrapper" onClick={() => this.handleChangeResult(data[0].show.name)}>
                <img src={data[0].show.image.original} alt={data[0].show.name}/>
              </div>
              <div className="result-info">
                <h3>{data[0].show.name}</h3>
                <div className="info-parameters">
                  <div className="genres"><b>Genres:</b> {`${item.show.genres}`}</div>
                  <div className="rating"><b>Rating:</b> {item.show.rating.average}</div>
                  <div className="status"><b>Status:</b> {item.show.status}</div>
                  <div className="url"><b>Url:</b> <a href={item.show.url}>link to site</a></div>
                  <div className="type"><b>Type:</b> {item.show.type}</div>
                </div>
              </div>
            </div>
        </div>
      ) : (
          <div className="list-result">
            <h1>Result search</h1>
            {data.map((item, index) => {
              return (
                <div className="result" key={index}>
                  <div className="image-wrapper" onClick={() => this.handleChangeResult(item.show.name)}>
                    {item.show.image === null ? <img/> : <img src={item.show.image.original} alt={item.show.name}/>}
                  </div>
                  <div className="result-info">
                    <h3>{item.show.name}</h3>
                    <div className="info-parameters">
                      <div className="genres"><b>Genres:</b> {`${item.show.genres}`}</div>
                      <div className="rating"><b>Rating:</b> {item.show.rating.average}</div>
                      <div className="status"><b>Status:</b> {item.show.status}</div>
                      <div className="url"><b>Url:</b> <a href={item.show.url}>link to site</a></div>
                      <div className="type"><b>Type:</b> {item.show.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );

  }
}

export default ShowSearchResultList;
