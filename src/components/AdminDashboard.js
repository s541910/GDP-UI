import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import './AdminDashboard.css'
import {  Table } from 'react-bootstrap';

 class AdminDashboard extends Component {
      constructor(props) {
    super(props)
    this.state = {
       events:[{"id":1,
             "eventname":"infosys hiring",
             "eventdate":"12/10/21",
             "location":"hyderabad",
             "emailid":"infosys@gmail.com"
             },
             {"id":2,
             "eventname":"Mindtree hiring",
             "eventdate":"12/10/21",
             "location":"Banglore",
             "emailid":"mindtree@gmail.com"
             },
             {"id":3,
             "eventname":"TCS hiring",
             "eventdate":"12/11/21",
             "location":"Chennai",
             "emailid":"tcs@gmail.com"
             }
             
             ]
      
    }
    this.deleteEmployee = this.deleteEmployee.bind(this)
    this.viewEmployee = this.viewEmployee.bind(this)
   
  }

   componentDidMount() {
    // AdminService.getEventsList().then((res) => {
    //     console.log(res)
    //  // this.setState({ events: res.data })
    // })
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
           <h1>Events List</h1>
           <Table striped bordered hover>
                        <thead>
                        <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Event Date</th>
                    <th>Location</th>
                    <th>Email ID</th>
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
                        <td>{ event.emailid }</td>
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