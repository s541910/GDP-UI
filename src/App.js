import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Event from './components/Event';


function App() {
  return (
   
        <Login/>
        // <Event component= {() => <Event authorized={false} />}/>
    
  );
}

export default App;
