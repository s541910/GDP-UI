import React, { Component } from 'react'
import './AdminDashboard.css'
import AdminService from '../services/AdminService'
import {  Table } from 'react-bootstrap';

 class AdminDashboard extends Component {
      constructor(props) {
    super(props)
    this.state = {
      events:[] 
    }
    this.deleteEmployee = this.deleteEmployee.bind(this)
    this.viewEmployee = this.viewEmployee.bind(this)
    // this.AddCompanyMember = this.AddCompanyMember.bind(this)
    // this.viewCompnayMemberList = this.viewCompnayMemberList.bind(this)
   
  }

   componentDidMount() {
    AdminService.getEventsList().then((res) => {
        console.log(res)
     this.setState({ events: res.data })
     console.log(res)
    })
  }

  deleteEmployee(id)
 {
    //  EmployeeService.deleteEmployee(id).then(res =>{
        this.setState({ events: this.state.events.filter(event => event.id !== id) }); 
        //  });
 }
viewEmployee(id)
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
                    <button style={{marginLeft:"10px"}} onClick={() => this.deleteEmployee(event.id)} className="btn btn-danger">Delete</button>
                    <button style={{marginLeft:"10px"}} onClick={() => this.viewEmployee(event.id)} className="btn btn-info">View</button>
                  </td>
                      </tr>)
                     }) 
                    }
                </tbody>
           </Table>

            </div>
        )
    }
}

export default AdminDashboard