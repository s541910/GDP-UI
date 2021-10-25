import './App.css';

import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import Welcome from './components/Welcome';
import AdminDashboard from'./components/AdminDashboard';
import CommitteMemberDashboard from './components/CommitteMemberDashboard'
import Register from './components/Register'



function App() {
  return (
   <BrowserRouter>
      <div className="App">
       
        <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/login' component={Login}/>
        <Route  path='/Welcome' component={Welcome}/>
        <Route  path='/AdminDashboard' component={AdminDashboard}/>
        <Route  path='/CommitteMemberDashboard' component={CommitteMemberDashboard}/>
        <Route  path='/register' component={Register}/>
        </Switch>
      
    </div>
   </BrowserRouter>
  );
}

 export default App;