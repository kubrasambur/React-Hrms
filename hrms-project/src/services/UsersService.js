import axios from "axios"

export default class UsersSevice{
    getUsers(){
        return axios.get("https://localhost:44370/api/User")
    }
    getById(id){
        return axios.get("https://localhost:44370/api/User/"+id)
    }

}