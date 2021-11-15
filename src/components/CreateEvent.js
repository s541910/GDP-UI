import React, { Component } from 'react'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         form:""             
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
                      value={this.state.eventName}
                    //   onChange={this.changeEventNameHandler}
                    />
                    <label>Event Description:</label>
                    <input
                      placeholder="Event Description"
                      name="eventDescription"
                      className="form-control"
                      value={this.state.eventDescription}
                    //   onChange={this.changeLastNameHandler}
                    />
                    <label>Location</label>
                    <input
                      placeholder="Location"
                      name="location"
                      className="form-control"
                      value={this.state.location}
                    //   onChange={this.changeEmailHandler}
                    />
                    <label>Event Date</label>
                    <input
                      placeholder="Event Date"
                      name="eventDate"
                      className="form-control"
                      value={this.state.eventDate}
                    //   onChange={this.changeEmailHandler}
                    />
                    <label>Event Type</label>
                    <input
                      placeholder="Event Type"
                      name="eventType"
                      className="form-control"
                      value={this.state.eventType}
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
}