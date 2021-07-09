import axios from "axios"

export default class EmployersSevice{
    getEmployers(){
        return axios.get("https://localhost:44370/api/Employer")
    }

    getById(id){
        return axios.get("https://localhost:44370/api/Employer/"+id)
    }

}