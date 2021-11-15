import axios from 'axios';
 //const apiBaseUrl = "https://connectcomapnybackend.herokuapp.com/";
 const apiBaseUrl = "http://localhost:8080/";
class LoginService{
    Login(employee){
        return axios.post(apiBaseUrl+"login", employee)
    }
    Register(employee){
        return axios.post(apiBaseUrl+"/register", employee)
    }
}
export default new LoginService()