// export const processLogin = (loginDetail)=>{
//     return fetch('http://localhost:8080/users/login',{
//         body: JSON.stringify(loginDetail),
//         headers:{"content-type":"application/json"},
//         method:"POST"
//     }).then((response)=>response.text())
// }
//check if user is logged in
export const isLoggedIn = () => {
    let data = localStorage.getItem("loginUserData");
    if(data===null) return false;
    return true;
}

//complete login process by storing to localstorage
export const doLogin = (data, next)=>{
    localStorage.setItem("loginUserData", JSON.stringify(data));
    next();
}
//complete logout process by removing from localstorage
export const doLogout = (next) => {
    localStorage.removeItem("loginUserData");
    next();
}
//get current user details
export const getCurrUser = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("loginUserData"));
    }
    return false;
}
