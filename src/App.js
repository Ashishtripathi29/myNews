import React, { Component } from 'react'
import NavBar from './componant/NavBar'
import NewsItem from './componant/NewsItem'
export class App extends Component {
  render() {
    return (
        <div>
            <NavBar></NavBar>
            <NewsItem></NewsItem>
        </div>
    )
  }
}
export default App