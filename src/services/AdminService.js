import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
const apiBaseUrl = "http://localhost:8080/";
class AdminService{
    getEventsList()
    {
        return axios.get(apiBaseUrl+"eventslist")
    }
    getCompnayMemList()
    {
        return axios.get(apiBaseUrl+"companyMembersList")
    }
    saveCompanyMember(user)
    {
        return axios.post(apiBaseUrl+'register',user)
    }
    deleteCompnayMember(id)
    {
        return axios.delete(apiBaseUrl+"deleteCompanyMember/"+id)
    }
   }
export default new AdminService()