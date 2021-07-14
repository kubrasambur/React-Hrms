import axios from "axios"

export default class EmployersSevice{
    getEmployers(){
        return axios.get("https://localhost:44370/api/Employer")
    }

    getById(id){
        return axios.get("https://localhost:44370/api/Employer/"+id)
    }
    post(companyName,companyNumber){
        return axios.post("https://localhost:44370/api/Employer/",{
            companyName:{companyName}, 
            companyNumber:{companyNumber}
        })
    }

}