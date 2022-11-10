export const testfn = () =>{
    console.log("Hello World")
}
const testObj = {
    key1 : 'value1',
    kry2 : 'value2'
}
export const saveUserInfo = (data) =>{
    localStorage.setItem('cred',JSON.stringify(data))
}
export const clearUserInfo = () => {
    localStorage.removeItem('cred')
}
export const isLoggedIn = () => {
    try{
        const val = JSON.parse(localStorage.getItem('cred'))
        return !!val;
    }
    catch{
        return false
    }
   
}

export default testObj;
