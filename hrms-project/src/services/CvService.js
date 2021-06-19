import axios from "axios"

export default class CvService{
    getCv(){
        return axios.get("http://localhost:3000/Cv")
    }
    getById(id){
        return axios.get("http://localhost:3000/Cv?id="+id)
    }

}