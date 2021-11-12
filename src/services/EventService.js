import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
 const apiBaseUrl = "http://localhost:8080/";

 class EventService{
    EventById(id){
        return axios.post(apiBaseUrl+"event/{id}", event)
    }
    
}
export default new EventService()