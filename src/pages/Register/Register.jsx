import React, { Component } from 'react'

export default class Register extends Component {
     register=()=>{
        //发送post请求 注册成功给提示
        console.log(this.username.value)
        console.log(this.password.value)
        console.log(this.email.value)
     }
  return=()=>{
         //返回登陆界面
   document.getElementById('login').style.display='block'
   document.getElementById('register').style.display='none'

     }
    render() {
    return (
     <div id='register'>Register
      <br></br>
      注册用户名<input ref={c=>this.username=c} name="name" />&nbsp;<br></br>
      注册密码&nbsp;&nbsp;<input ref={c=>this.password=c} name="password" type="password"/>
      <br></br>
      注册邮箱<input ref={c=>this.email=c} name="email"/>
      <br></br>
       <button onClick={this.register}>立即注册</button> 
       <button onClick={ this.return}>取消</button> 
      
      </div>
    )
  }
}
