import React, { Component } from "react";
import "../../style/Navbar.css";
import { TextField } from "@mui/material";

import Button from '@mui/material/Button';

export class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:"",
         lastname:"",
         password:"",
         email:"",
         mobile:"",
         address:"",

      }
    }
  render() {
    return (
      <div className="center">
      <h1>Register</h1>
      <TextField
          id="outlined-basic"
          label="FirstName"
          variant="outlined"
          type="text"
          onChange={(value) => {
            this.setState({
              props: "firstname",
              email: value.target.value,
            });
          }}
        />
        <br />< br/>
        <TextField
          id="outlined-basic"
          label="LastName"
          variant="outlined"
          type="text"
          onChange={(value) => {
            this.setState({
              props: "lastname",
              password: value.target.value,
            });
          }}
        /> <br /><br />
        <TextField
          id="outlined-basic"
          label="PassWord"
          variant="outlined"
          type="password"
          onChange={(value) => {
            this.setState({
              props: "password",
              password: value.target.value,
            });
          }}
        /> <br /><br />
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
        />  <br /><br />
        <TextField
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
          type="text"
          onChange={(value) => {
            this.setState({
              props: "mobile",
              password: value.target.value,
            });
          }}
        />  <br /><br />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          type="text"
          onChange={(value) => {
            this.setState({
              props: "address",
              password: value.target.value,
            });
          }}
        />  <br /><br />
        
        
        <Button variant="contained">Register</Button><br/><br/>
       
        
      </div>
      
    )
  }
}

export default Register;