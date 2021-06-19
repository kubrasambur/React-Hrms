import axios from "axios"

export default class UsersSevice{
    getUsers(){
        return axios.get("http://localhost:3000/Users")
    }
    getById(id){
        return axios.get("http://localhost:3000/Users?id="+id)
    }

}