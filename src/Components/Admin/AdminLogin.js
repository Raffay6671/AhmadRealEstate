import React, { Component } from 'react'
import "D:/Property Project/FrontEnd/ahmadrealestate/src/Styles/AdminLogin.css"




export default function AdminLogin() {
  return (
    <div>
        <div>
      <form className='form'>
      <div class="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  )
}
