import axios from "axios"

export default class CvService{
    getCv(){
        return axios.get("https://localhost:44370/api/Cv")
    }
    GetById(id){
        return axios.get("https://localhost:44370/api/Cv/"+id)
    }

}