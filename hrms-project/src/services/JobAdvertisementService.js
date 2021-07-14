import axios from "axios"

export default class JobAdvertisementService{

    getAdvertisement(){
        return axios.get("https://localhost:44370/api/JobAdvertisement")
    }
    getById(id){
        return axios.get("https://localhost:44370/api/JobAdvertisement/"+id)
    }
}


export const postAdvert=(jobAdvertisement) =>{
    return axios.post("https://localhost:44370/api/JobAdvertisement/",jobAdvertisement)
}