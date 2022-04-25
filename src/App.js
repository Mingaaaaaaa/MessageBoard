import React, { Component } from 'react'
import Register  from './pages/Register/Register'
import {Link, Route } from 'react-router-dom'
import axios from 'axios'

export default class App extends Component {
 
  login=()=>{
    //发送登录请求
    axios.post('/login', {
      username: this.username.value,
      password: this.password.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(this.username.value)
    console.log(this.password.value)
   }

  register=()=>{
   console.log('跳到注册页')
   document.getElementById('login').style.display='none'
}

  render() {
     
    return (
      <div>
       <div id='login'>
       
       Welcome
      <br></br>
      输入用户名<input ref={c=>this.username=c} name="name" />
       <br></br>
        &nbsp;输入密码&nbsp;&nbsp;<input ref={c=>this.password=c} name="password" type="password"/>
       <br></br>
       <br></br>
       &nbsp;&nbsp;<button onClick={this.login}>登录</button>  
       &nbsp;&nbsp;
       <button onClick={this.register}>
       <Link to={`/register`}>注册</Link>
       </button>

      </div>
       
      <Route path={'/register'}  component={Register} /> 

      </div>
    )
  }
}
