import React, { Component } from 'react'
import './AdminDashboard.css'
import AdminService from '../services/AdminService'
import EventService from '../services/EventService'
import {  Table } from 'react-bootstrap';

 class AdminDashboard extends Component {
      constructor(props) {
    super(props)
    this.state = {
      events:[] 
    }
    this.deleteEvent = this.deleteEvent.bind(this)
    this.viewEvent = this.viewEvent.bind(this)
     this.AddCompanyMember = this.AddCompanyMember.bind(this)
     this.viewCompnayMemberList = this.viewCompnayMemberList.bind(this)
   
  }

   componentDidMount() {
    AdminService.getEventsList().then((res) => {
     this.setState({ events: res.data })
    })
  }
viewCompnayMemberList()
{
   const {history} = this.props;
        history.push('/CompanyMemberDashboardList')
}
AddCompanyMember()
{
  const {history} = this.props;
        history.push('/addcompanymember')

}
back()
  {
     this.props.history.goBack();
  }
  deleteEvent(id)
   {
     EventService.deleteEvent(id).then(res =>{
        this.setState({ events: this.state.events.filter(event => event.id !== id) }); 
      });
      }
    viewEvent(id)
    {
        this.props.history.push(`/view-event/${id}`)
    }
    render() {
        return (
            <div>
            <div>
           <h1>Events List</h1>
            <button style={{marginLeft:"10px"}} onClick={() => this.AddCompanyMember()} className="btn btn-danger">Add Company Member</button>
            <button style={{marginLeft:"10px"}} onClick={() => this.viewCompnayMemberList()} className="btn btn-info">Company Members List</button>
           </div>
           <Table striped bordered hover>
                        <thead>
                        <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Event Date</th>
                    <th>Location</th>
                   
                    <th>Actions</th>

                  </tr>
                </thead>
                <tbody>
     
                  { this.state.events.map(event => {
                      return (<tr key={event.id }>
                        <td>{ event.id }</td>
                        <td>{ event.eventname }</td>
                        <td>{ event.eventdate }</td>
                        <td>{ event.location }</td>
                        
                        <td>
                    <button style={{marginLeft:"10px"}} onClick={() => this.deleteEvent(event.id)} className="btn btn-danger">Delete</button>
                    <button style={{marginLeft:"10px"}} onClick={() => this.viewEvent(event.id)} className="btn btn-info">View</button>
                  </td>
                      </tr>)
                     }) 
                    }
                </tbody>
           </Table>
 <button style={{marginLeft:"10px"}} onClick={() => this.back()} className="btn btn-danger">Back</button> 
            </div>
        )
    }
}

export default AdminDashboard