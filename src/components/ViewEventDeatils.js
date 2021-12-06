import React, { Component } from 'react'
import EventService from '../services/EventService'

export default class ViewEventDeatils extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event:[],  
            id: this.props.match.params.id
             
        }
    }
    componentDidMount() {
     EventService.getEventById(this.state.id).then((res) => {
       this.setState({ event: res.data })
     })
  }
  back()
  {
     this.props.history.goBack();
  }
    
    render() {
        return (
       <div className="card col-md-6 offset-md-3">
        <br></br>
          <h3 className="text-center"> View Event Details</h3>
          <div className="card-body">
            <div className= "row">
              <label>Event  Name:
              <b>{this.state.event.eventname}</b></label>
            </div>
            <div className= "row">
              <label>Event  Description:
              <b>{this.state.event.eventdescription}</b></label>
            </div>
            <div className= "row">
              <label>Event  Type:
              <b>{this.state.event.eventtype}</b></label>
            </div>
            <div className="row">
              <label>Date: 
              <b>{this.state.event.eventdate}</b></label>
            </div>
            <div className="row">
              <label> Location: 
              <b>{this.state.event.location}</b></label>
            </div>
            <button style={{marginLeft:"10px"}} onClick={() => this.back()} className="btn btn-danger">Back</button> 
          </div>
        </div>
   
        )
    }
}