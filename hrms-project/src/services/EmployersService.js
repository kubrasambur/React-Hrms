import axios from "axios"

export default class EmployeersSevice{
    getEmployers(){
        return axios.get("http://localhost:3000/Employers")
    }

}