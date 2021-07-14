import axios from "axios"

export default class CvService{
    getCv(){
        return axios.get("https://localhost:44370/api/Cv")
    }
    GetById(id){
        return axios.get("https://localhost:44370/api/Cv/"+id)
    }

}
export const postCv=(cv) =>{
    return axios.post("https://localhost:44370/api/Cv/",cv)
}
export const deleteCv=(del)=>{
    console.log("-------------<<<<<DEL API>>>>>>-----")
    console.log("https://localhost:44370/api/Cv/"+del)
    return axios.delete("https://localhost:44370/api/Cv/"+del)
}