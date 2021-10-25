import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoginService from '../services/LoginService'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }
    handleLoginClick()
    {
         const {history} = this.props;
        history.push('/')
    }

    handleClick(event) {

        const {history} = this.props;

        var payload = {
            "firstname": this.state.first_name,
            "lastname": this.state.last_name,
            "email": this.state.email,
            "password": this.state.password
        }
        LoginService.Register(payload).then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                history.push('/');   
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={(event, newValue) => this.setState({ last_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
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
                        <RaisedButton label="Login" primary={true} style={style} onClick={() => this.handleLoginClick()} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;