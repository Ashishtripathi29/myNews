import React, { Component } from 'react'

class About extends Component {
    render() {
        return <>
            <div >
                <div className="row no-gutters" >
                    <div className="col-md-4" style={{"height":"200px","width":"200px","text-align":"left"}}>
                        <img src="https://avatars.githubusercontent.com/u/102709522?s=400&u=5fa2230b58f61d3673aaa7e7594954bd57c428dd&v=4" className="card-img" alt="img"  />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Ashish Tripathi</h5>
                            <p className="card-text">I am Ashish Tripathi  graduate with Bsc (math) I am intrested  in coding thats why I am learning React js which help to devolap frontend website,<br />
                                with the help of react js I created this website where we can read the following news
                                <ul>
                                    <li>General</li>
                                    <li> Technology</li>
                                    <li> Sports</li>
                                    <li> Science</li>
                                    <li> Health</li>
                                    <li> Business</li>
                                    <li> Entertainment</li>
                                </ul>
                   resource from  newsApi for news
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default About