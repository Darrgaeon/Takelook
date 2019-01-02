import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap/src";
import SearchLineContainer from "../containers/SearchLineContainer";
import ShowSearchResultListContainer from "../containers/ShowSearchResultListContainer";
import ShowListSeriesContainer from "../containers/ShowListSeriesContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <Route exact path="/" component={SearchLineContainer}/>
              <Route exact path="/list" component={ShowSearchResultListContainer}/>
              <Route exact path="/result" component={ShowListSeriesContainer}/>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
