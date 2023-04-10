import React, { Component } from 'react'

export class Card extends Component {
    render() {
        let {title,imgUrl,url,dis,author,date,name}=this.props
        return (
            <div>
                <div className="card" >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>{name}</span>
                    <img src={imgUrl} className="card-img-top" alt="this is img" height='200px'/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{dis}...</p>
                            <p className="card-text"><small className="text-body-secondary"> By {author?author:"unknown"} at {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={url} target='_blank' className="btn  btn-sm btn-dark">read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Card
