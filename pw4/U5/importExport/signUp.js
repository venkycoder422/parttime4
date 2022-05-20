import navbar from "./navbar.js";

document.querySelector("#main_div").innerHTML= navbar();
var foodUserData;

foodUserData=JSON.parse(localStorage.getItem('foodUserData'))||[];
document.querySelector("#submit").addEventListener('click',signUp)
function signUp(){
    event.preventDefault();
    let data={
        name:document.getElementById("Name").value,
        number:document.getElementById("Number").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    foodUserData.push(data);
    localStorage.setItem('foodUserData',JSON.stringify(foodUserData));
        
    window.location.href="./login.html";

}
