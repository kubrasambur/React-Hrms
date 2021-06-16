import axios from "axios"

export default class JobEmployerService{

    getJobEmployer(){
        return axios.get("http://localhost:3000/JobEmployer")
    }


}