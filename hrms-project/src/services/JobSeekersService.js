import axios from "axios"

export default class EmployeersSevice{
    getJobSeekers(){
        return axios.get("https://localhost:44370/api/JobSeeker")
    }

    getById(id){
        return axios.get("http://localhost:3000/JobSeekers?id="+id)
    }
}