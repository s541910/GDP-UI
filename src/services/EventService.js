import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
 const apiBaseUrl = "http://localhost:8080/";

 class EventService{
    // EventById(id){
    //     return axios.post(apiBaseUrl+"event/{id}", event)
    // }
    deleteEvent(Id)
    {
       return axios.post(apiBaseUrl+"event/{id}") 
    }
    
}
export default new EventService()