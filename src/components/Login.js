import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import LoginService from '../services/LoginService'

class Login extends Component {
     constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
    handleRegisterClick()
    {
         const {history} = this.props;
         history.push('/register');
        

    }
  handleClick(event){
      this.error = null;
      this.spin = true;


      const {history} = this.props;
        var payload={
        "email":this.state.username,
        "password":this.state.password
        }
        LoginService.Login(payload).then((response) => {
            if(response.status === 200){ 
            console.log("sdb ashdaksd",response);
            let role = response.data.role;
            if(role === "admin")
            {
               
                history.push('/AdminDashboard');  
            }   else if(role === "committemember")  
            {
                
                history.push('/CompanyMemberDashboard');  
            }
            else{
                
                history.push('/UserDashboard');  
            }
            
        }
        else if(response.status === 204){  
            alert("username or password do not match")
            this.setState({password: ""});
        }
        else{
            history.push('/register');
            console.log("Username does not exists");   
        }
        })
        .catch((error) => {
          this.spin = false;
          this.setState({password: ""});
        });
        
    }        
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={
                                (event, newvalue) => this.setState({ username: newvalue })
                            }
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        <RaisedButton label="Register" primary={true} style={style} onClick={() => this.handleRegisterClick()} />
                    </div>

                </MuiThemeProvider>

            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default Login
