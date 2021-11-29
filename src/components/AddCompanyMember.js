import React, { Component } from 'react'
import AdminService from '../services/AdminService'

export default class AddCompanyMember extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            Email:'', 
            role:'',
            password:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.changeEmailHandler = this.changeEmailHandler.bind(this)
      
    }

    changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value })
  }
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value })
  }
  changeEmailHandler = (event) => {
    this.setState({ Email: event.target.value })
  }

    saveEmployeMemberData=(e)=>{
          e.preventDefault();
           let user = {firstName: this.state.firstName, lastName: this.state.lastName, 
           email: this.state.Email, role: "companymember",password:"1234"};

            AdminService.saveCompanyMember(user).then(res =>{
            this.history.push('/CompanyMemberDashboardList')
           });
    }

    cancel(){
            this.props.history.push('/');
            }
    render() {
        return (
        <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                  <h1>Add a New Company Member</h1>
              }
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                       onChange={this.changeLastNameHandler}
                    />
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="Email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                     <label>Company Name</label>
                    <input
                      placeholder="Email"
                      name="Company Name"
                      className="form-control"
                      value={this.state.companyName}
                      onChange={this.changecompanyNameHandler}
                    />
                     <label>Address</label>
                    <input
                      placeholder="Address"
                      name="Address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeaddressHandler}
                    />
                     <label>Mobile Number</label>
                    <input
                      placeholder="Mobile Number"
                      name="mobilenumber"
                      className="form-control"
                      value={this.state.mobilenumber}
                      onChange={this.changeMobileNumberHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                     onClick={this.saveCompanyMemberData}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                     onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}