import axios from "axios"

export default class EmployeersSevice{
    getEmployeers(){
        return axios.get("https://localhost:44370/api/Employeer")
    }

    getById(id){
        return axios.get("http://localhost:3000/Employeers?id="+id)
    }

}