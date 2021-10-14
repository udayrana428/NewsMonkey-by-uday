import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15
  country = "in"
  apikey=process.env.REACT_APP_API_KEY
  state = {
    progress: 20
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/technology">
              <News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} category="technology" />
            </Route>
            <Route exact path="/sports">
              <News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} category="sports" />
            </Route>
            <Route exact path="/science">
              <News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} category="science" />
            </Route>
            <Route exact path="/health">
              <News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} category="health" />
            </Route>
            <Route exact path="/entertainment">
              <News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />
            </Route>
            <Route exact path="/business">
              <News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={this.country} category="business" />
            </Route>
            {/* <Route exact path="/about">
              <News apikey={this.apikey} setProgress={this.setProgress} key="" pageSize={this.pageSize} country={this.country} category="business" />
            </Route> */}
            <Route exact path="/">
              <News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category="general" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}