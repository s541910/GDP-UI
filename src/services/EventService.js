import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
 const apiBaseUrl = "http://localhost:8080/";

 class EventService{
    getEventById(id){
        return axios.get(apiBaseUrl+"event/"+id)
    }
    deleteEvent(id)
    {
       return axios.delete(apiBaseUrl+"deleteevent/"+id) 
    }
    
}
export default new EventService()