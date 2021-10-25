import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import './AdminDashboard.css'
 class AdminDashboard extends Component {
      constructor(props) {
    super(props)
    this.state = {
        events:[],
      
    }
   
  }
   componentDidMount() {
    AdminService.getEventsList().then((res) => {
        console.log(res)
      this.setState({ events: res.data })
    })
  }
    render() {
        return (
            <div>
            <div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>
                <h2 className="text-center">Events List</h2>
                 <div className="row">
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Event Id</th>
                            <th> Event Type</th>
                            <th> Event Description </th>
                            <th>Event Name </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.events.map((event) => (
                            <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.eventType}</td>
                            <td>{event.eventDescription}</td>
                            <td>{event.eventName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
        )
    }
}

export default AdminDashboard