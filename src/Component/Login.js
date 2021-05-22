import React, { Component } from 'react'
import './login.css';
import axios from 'axios'
import config from '../config/config'
import {  toast } from 'react-toastify';


export default class login extends Component {
    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: ""
        }
    }

    loginUser = () => {
        let { email, password } = this.state
        axios.post(`${config.API}/login`, { email, password }).then(async (res) => {
            let data = res.data
            if (data.status !== "OK") {
                toast(data.msg)
            } else {
                let token = data.data.token
                await localStorage.setItem("lgntkn", token)
                toast(data.msg)
                window.location = '/'

            }

        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-flex navbar-light  p-4">
                    <div className="container-fluid ">
                        <div className="logo col-md-6 h3">
                            <p className="m-0">SHOPPERS STOP</p>

                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                      
                        <div className="link-bar ">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="links text-uppercase d-flex ">
                                        <a  className="px-3 black">
                                            <p>contact us</p>
                                        </a>
                                        <a className="px-3 black">
                                            <p>about us</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container offset-md-1 mt-0 ">
                    <div className="row" id="hero-row">

                        <div className="col-md-12 d-md-flex p-0 hero-body">
                            <div className="left-section rounded-right   col-md-6 " >
                                <div className="inner-form col-md-10 offset-md-1">
                                   
                                        <div className="email ">
                                            <label for="exampleInputEmail1" 
                                            className="form-label "></label>
                                            <input 
                                            
                                            type="email"
                                            className="form-control "
                                            placeholder="Email or phone-number "                                      
                                            id="exampleInputEmail1" aria-describedby="emailHelp" 
                                            name="email"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                            required/>

                                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input

                                            type="password" 
                                            className="form-control"
                                            placeholder="password" 
                                            id="exampleInputPassword1" 
                                            name="password"
                                            value={this.state.password}
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                            required/>

                                        </div> 
                                        <div className="remember third-row d-flex space-bt ">
                                            <p className="m-0 p-0 mt-3 text-white">remember me</p>
                                            <button type="" className="btn  btn-primary  mt-2" id="sign-in" onClick={this.loginUser}>Log in</button>
                                        </div>
                                        <div className="forth-row d-flex space-bt">

                                            {/* <Link to="/Signup"> signup now</Link> */}
                                            {/* <a className="text-white">Forgotten password?</a> */}

                                        </div>


                                        <div className="fb-gg text-center mt-3">
                                            <h6 className="text-white">or login with :</h6>
                                            <hr></hr>
                                            <button className="btn btn-light login-by d-block px-4  "><i className="fab fa-google fa-2x "></i> login with google</button>
                                            <button className="btn btn-light login-by d-block px-3  "> <i className="fab fa-facebook-square fa-2x "></i>login with facebook</button>
                                            
                                        </div>


                                   
                                </div>
                            </div>
                            <div className="right-section col-md-6   rounded-left ">

                                <div className="shop-img">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}