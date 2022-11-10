import data from "./data.json"
import { saveUserInfo } from "../utils/Common"
const dummyApi = (user) => {
    if (data[user]){
        return Promise.resolve(data[user.role])
    }
    else{
        return Promise.reject("invalid user")
    }
}
export const login = (username,password) => {
    return dummyApi(username,password)
    .then((role)=>{
        saveUserInfo({
            username,role
        });
        return {
            status:'success',
            data:role
        }
    })
}