import React, { Component } from 'react'
import axios from 'axios'

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            perPage: 50,
            currentPage: 2, 
            nPages:1,
            sortBy:"price",
            sortOrder:-1
        }
    }

    fetchData = () => {
        let { perPage, currentPage, sortBy, sortOrder } = this.state

        axios.get(`http://localhost:3300/product?limit=${perPage}&page=${currentPage}&sortby=${sortBy}&sortorder=${sortOrder}`).then(data => {
            this.setState({
                products: data.data.data,
                nPages: data.data.nPages
            })
        }).catch(err => {

        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handlePerPage = (perPage) => {
        console.log(perPage)
        this.setState({ perPage: perPage }, () => this.fetchData())

    }

    handlePagination = (action)=>{
        console.log(action)
        let {currentPage, nPages} = this.state
        if(action == "next"){
            if(currentPage<nPages){
                currentPage++
            }
        }

        if(action == "prev"){
            if(currentPage > 1){
                currentPage--
            }
        }

        this.setState({ currentPage: currentPage}, ()=>{
            this.fetchData()
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-2">
                        Show Per Page
                        <select className=""
                            value={this.state.perPage}
                            onChange={
                                (e) => this.handlePerPage(e.target.value)
                            }
                        >
                            <option value="50">50</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                        </select>
                    </div>
                    <div className="col-md-2 mt-5"></div>
                    <div className="col-md-10 mt-5">
                        <div className="row">
                            {this.state.products.map((product) => {
                                return (<div className="col-md-3">
                                    <div className="card" >
                                        <img src={`https://z.nooncdn.com/products/tr:n-t_400/${product.image_key}.jpg`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.brand}</p>

                                            <small>{product.price}</small><br></br>


                                            <a href="#" className="btn btn-sm btn-outline-primary">add to cart</a>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>

                    <div className="col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#"
                                onClick={()=>this.handlePagination("prev")}>Previous</a></li>
                                
                                <li class="page-item"><a class="page-link" href="#"
                                onClick={()=>this.handlePagination("next")}
                                >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}