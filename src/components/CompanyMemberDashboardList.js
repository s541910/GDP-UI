import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import {  Table } from 'react-bootstrap';
export default class CompanyMemberDashboardList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            compnayMembersList:[]    
        }
    }
    componentDidMount() {
    AdminService.getCompnayMemList().then((res) => {
     this.setState({compnayMembersList: res.data })
    })
  }
  deleteCompnayMember(id)
   {
     AdminService.deleteCompnayMemById(id).then(res =>{
        this.setState({ compnayMembersList: this.state.compnayMembersList.filter(cMlist => cMlist.id !== id) }); 
      });
      }
  back()
  {
     this.props.history.goBack();
  }
    
    render() {
        return (
            <div>
           <h1>Compnay Members List</h1>
           <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                         </tr>
                         </thead>
                <tbody>
     
                  { this.state.compnayMembersList.map(cMlist => {
                      return (<tr key={cMlist.id }>
                        <td>{ cMlist.firstname }</td>
                        <td>{ cMlist.lastname }</td>
                        <td>{ cMlist.email }</td> 
                        <td>
                        <button style={{marginLeft:"10px"}} onClick={() => this.deleteEmployee(cMlist.id)} className="btn btn-danger">Delete</button> 
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
