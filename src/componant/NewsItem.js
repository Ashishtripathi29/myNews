import React, { Component } from 'react'
import Card from './Card'
import loader from '../Ajax-loader.gif'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    static defaultProps={
            country:"in",
            category:"general",
            pageSize:"9"
    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
    }
    
    capCase=(st)=>st.charAt(0).toUpperCase() + st.slice(1)
    
    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        
       document.title=`${this.capCase(this.props.category)}-myNews`
        
    }

    update=async (c) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e5ffccdc8304f4ca5d6b6e444bb12b5&page=${this.state.page}&pageSize=${this.props.pageSize}`
                this.setState({
                    loading: true
                })
                let data = await fetch(url)
                data = await data.json()
                this.setState({
                    articles: data.articles,
                    total: data.totalResults,
                    loading: false
                })              
    }

    async componentDidMount() {
       this.update()
    }

    pre = async () => {
      this.setState({
        page:this.state.page -1
      })
      this.update()
    }

    next = async () => {
      this.setState({
        page:this.state.page+1
      })
      this.update()
    }

    render() {
       
        return (
            <div className='container text-center' >
                <h1>This news From my-News {this.props.category}</h1>
                <hr />
                <form action="" ></form>
                
               {this.state.loading ? <img src={loader} alt="img" height={"100vh"}/>:<div className='row my-4'>
                    {this.state.articles && this.state.articles.map((e) => {
                        return <div className="col-md-4 my-2" key={e.url}>
                            <Card title={e.title ? e.title.slice(0, 30) : ""} imgUrl={e.urlToImage ? e.urlToImage : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} url={e.url} dis={e.description ? e.description.slice(0, 50) : ""} author={e.author} date={e.publishedAt} name={e.source.name}></Card>
                        </div>
                    })}
                </div>
               } 
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" onClick={this.pre} className="btn  btn-dark"> &larr;Previves</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.total / `${this.props.pageSize}`)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}
export default NewsItem