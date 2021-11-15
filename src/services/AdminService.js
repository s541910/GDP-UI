import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
const apiBaseUrl = "http://localhost:8080/";
class AdminService{
    getEventsList()
    {
        return axios.get(apiBaseUrl+"eventslist")
    }
   }
export default new AdminService()