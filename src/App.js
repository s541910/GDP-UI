import './App.css';

import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import Welcome from './components/Welcome';
import AdminDashboard from'./components/AdminDashboard';
import CompanyMemberDashboard from './components/CompanyMemberDashboard'
import Register from './components/Register'
import CreateEvent from './components/CreateEvent'
import AddCompanyMember from './components/AddCompanyMember'
import ViewEventDeatils from './components/ViewEventDeatils'
import CompanyMemberDashboardList from './components/CompanyMemberDashboardList'



function App() {
  return (
   <BrowserRouter>
      <div className="App">
       {/* <NavBar/> */}
        <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/Login' component={Login}/>
        <Route  path='/Welcome' component={Welcome}/>
        <Route  path='/AdminDashboard' component={AdminDashboard}/>
        <Route  path='/CompanyMemberDashboard' component={CompanyMemberDashboard}/>
        <Route  path='/Register' component={Register}/>
        <Route path='/createevent' component={CreateEvent}/>
        <Route path='/addcompanymember' component={AddCompanyMember}/>
        <Route path='/view-event/:id' component={ViewEventDeatils}/>
        <Route path="/CompanyMemberDashboardList" component={CompanyMemberDashboardList}/>
       
        </Switch>
    </div>
   </BrowserRouter>
  );
}

 export default App;