import React, { Component } from 'react'
import './login.css';
import axios from 'axios'
import config from '../config/config'
import {toast } from 'react-toastify';


export default class Register extends Component {
    constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        mobileNumber:"",
        password:"",
    

    }
    
}
registerUser = ()=>{
    let {name, email, password} = this.state
    axios.post(`${config.API}/register`, {name, email, password}).then(res=>{
        let data = res.data
        if(data.status != "OK"){
            toast(data.msg)
        }else{
            toast(data.msg)
            window.location = '/login'
            // history.push('/Login')
            
        }

    }).catch(err=>{
        console.log(err)
    })
}
    render() {
        return (
             <div>
                <div className="container offset-md-1 ">
                    <div className="row" id="hero-row">
                        <div className="col-md-12 d-md-flex p-0 hero-body">
                            <div className="left-section rounded-right   col-md-6 " >
                                <div className="inner-form col-md-10 offset-md-1">
                                    <form className=" myForm p-4 " >
                                        <p className="text-white h2">signup here :)</p>
                                        <div className="name ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input 
                                            type="name" 
                                            className="form-control " 
                                            placeholder="Full-Name"
                                            id="exampleInputname"                                                
                                            aria-describedby="emailHelp"
                                            value={this.state.name}
                                            onChange={(e)=>this.setState({name:e.target.value})}/>
                                        </div> 
                                        <div className="mobile-number ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input 
                                            type="number" 
                                            name="number" 
                                            className="form-control "
                                            placeholder="Mobile-Number"
                                            id="exampleInputnumber" 
                                            aria-describedby="emailHelp"
                                            value={this.state.mobileNumber}
                                            onChange={(e)=>this.setState({mobileNumber:e.target.value})}
                                            required
                                            />
                                        </div>
                                    
                                        <div className="email ">
                                            <label for="exampleInputEmail1" className="form-label "></label>
                                            <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control " 
                                            placeholder="Email"                                                
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={this.state.email}
                                            onChange={(e)=>this.setState({email:e.target.value})}
                                            required
                                            />
                                        </div>

                                        <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input 
                                            type="password" 
                                            name="password" 
                                            className="form-control"                                                
                                            placeholder="password" 
                                            id="exampleInputPassword1"
                                            value={this.state.password}
                                            onChange={(e)=>this.setState({password:e.target.value})}
                                               
                                            />
                                        </div>
                                        {/* <div className="password-area ">
                                            <label for="exampleInputPassword1" className="form-label"></label>
                                            <input 
                                            type="password" 
                                            name="passwordConfirmation" 
                                            className="form-control"                                                
                                            placeholder="Confirm-password" 
                                            id="exampleInputPasswordconfirm"
                                            value={this.state.passwordConfirmation}
                                            onChange={this.handelChange}
                                            required   
                                            />
                                        </div> */}

                                        <div className="remember third-row d-flex space-bt ">
                                            <button type=" " className="btn  btn-primary  mt-2" id="sign-in" onClick={this.registerUser}>Next</button>
                                        </div>                            
                                    </form>
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