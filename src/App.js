// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 15
//   country = "in"
//   apikey=process.env.REACT_APP_API_KEY
//   state = {
//     progress: 20
//   }
//   setProgress = (progress) => {
//     setState({ progress: progress })
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={state.progress}
//           // onLoaderFinished={() => setProgress(0)}
//           />
//           <Switch>
//             <Route exact path="/technology">
//               <News apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />
//             </Route>
//             <Route exact path="/sports">
//               <News apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />
//             </Route>
//             <Route exact path="/science">
//               <News apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" />
//             </Route>
//             <Route exact path="/health">
//               <News apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" />
//             </Route>
//             <Route exact path="/entertainment">
//               <News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
//             </Route>
//             <Route exact path="/business">
//               <News apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" />
//             </Route>
//             {/* <Route exact path="/about">
//               <News apikey={apikey} setProgress={setProgress} key="" pageSize={pageSize} country={country} category="business" />
//             </Route> */}
//             <Route exact path="/">
//               <News apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default function App(props) {
  let { pageSize,country,apikey } = props
  pageSize = 15
  country = "in"
  apikey = process.env.REACT_APP_API_KEY
  const [progress, setprogress] = useState(20)
  const setProgress = (progress) => {
    setprogress(progress)
  }
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/technology">
            <News apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />
          </Route>
          <Route exact path="/sports">
            <News apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />
          </Route>
          <Route exact path="/science">
            <News apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" />
          </Route>
          <Route exact path="/health">
            <News apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" />
          </Route>
          <Route exact path="/entertainment">
            <News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
          </Route>
          <Route exact path="/business">
            <News apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" />
          </Route>
          {/* <Route exact path="/about">
              <News apikey={apikey} setProgress={setProgress} key="" pageSize={pageSize} country={country} category="business" />
            </Route> */}
          <Route exact path="/">
            <News apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}