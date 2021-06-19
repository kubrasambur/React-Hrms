import axios from "axios"

export default class JobAdvertisementService{

    getAdvertisement(){
        return axios.get("http://localhost:3000/JobAdvertisement")
    }
    getById(id){
        return axios.get("http://localhost:3000/JobAdvertisement?id="+id)
    }


}