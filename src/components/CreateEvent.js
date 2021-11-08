import React, { Component } from 'react'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    cancel()
{
    this.props.history.push('/');
}
    
    render() {
        return (
           <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                  <h1>Create a New Event</h1>
              }
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Event Name:</label>
                    <input
                      placeholder="Event Name"
                      name="eventName"
                      className="form-control"
                    //   value={this.state.eventName}
                    //   onChange={this.changeEventNameHandler}
                    />
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                    //   value={this.state.lastName}
                    //   onChange={this.changeLastNameHandler}
                    />
                    <label>Email:</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                    //   value={this.state.emailId}
                    //   onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    // onClick={this.saveEmployeeData}
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
}s