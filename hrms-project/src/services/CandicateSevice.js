import axios from "axios"

export default class CandicateSevice{
    getCandidate(){
        return axios.get("http://localhost:3000/Candicate")
    }

}

