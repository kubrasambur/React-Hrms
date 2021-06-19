import axios from "axios"

export default class EmployersSevice{
    getEmployers(){
        return axios.get("http://localhost:3000/Employers")
    }

    getById(id){
        return axios.get("http://localhost:3000/Employers?id="+id)
    }

}