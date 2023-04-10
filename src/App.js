import React, { Component } from 'react'
import NavBar from './componant/NavBar'
import NewsItem from './componant/NewsItem'
import About from './componant/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
 constructor(){
  super()
  document.body.style.background = '#5661a1'
 }

  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/"   element={<NewsItem key="general" pageSize={9} country="in" category='general' /> }/>
            <Route exact path="/business" element={<NewsItem key="business" pageSize={9} country="in" category='business' /> }/>
            <Route exact path="/entertainment" element={<NewsItem key="entertainment" pageSize={9} country="in" category='entertainment' /> }/>
            <Route exact path="/health" element={<NewsItem key="health" pageSize={9} country="in" category='health' /> }/>
            <Route exact path="/science" element={<NewsItem key="science" pageSize={9} country="in" category='science' /> }/>
            <Route exact path="/sports" element={<NewsItem key="sports" pageSize={9} country="in" category='sports' /> }/>
            <Route exact path="/technology" element={<NewsItem key="technology" pageSize={9} country="in" category='technology' /> }/>
            <Route exact path="/About" element={<About /> }/>
          </Routes>
        </div>
      </Router>
    )
  }
}
export default App