import React, { Component } from 'react'
import "../../style/Navbar.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:""
      }
    }
  render() {
    return (
      <div className='center'>
      <h1>Login Page</h1>
      <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(value) => {
            this.setState({
              props: "email",
              password: value.target.value,
            });
          }}
        /> <br /><br />
      <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(value) => {
            this.setState({
              props: "password",
              password: value.target.value,
            });
          }}
        /> <br /><br />
        <Button variant="contained">Login</Button><br/><br/>

      </div>
    )
  }
}

export default Login;