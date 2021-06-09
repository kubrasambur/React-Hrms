import axios from "axios"

export default class EmployeersSevice{
    getJobSeekers(){
        return axios.get("http://localhost:3000/JobSeekers")
    }

}