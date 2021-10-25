import React, { Component } from 'react'



 class Welcome extends Component {
      constructor(props) {
        super(props);
        this.state = {
           
        }
    }
     handleLoginClick()
    {
         const {history} = this.props;
        history.push('/Login')
    }

     handleRegisterClick()
    {
         const {history} = this.props;
        history.push('/Login')
    }
    render() {
        return (
            <div>
                <h1>Welcome to our website</h1>
                <button type="button"  onClick={() => this.handleLoginClick()} >Login</button> 
                <button type="button" onClick={() => this.handleRegisterClick()} >Register</button>
            </div>
        )
    }
}

export default Welcome