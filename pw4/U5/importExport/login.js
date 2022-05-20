import navbar from "./navbar.js";

document.querySelector("#main_div").innerHTML= navbar();

var data=JSON.parse(localStorage.getItem('foodUserData'));
document.querySelector("#submit").addEventListener('click',login);
function login(){
event.preventDefault();
    var istrue=false;
    data.forEach(function(details){
        
        if(details.email===document.querySelector("#email").value && details.password===document.querySelector("#password").value){
            istrue=true;
            }
    });
    
    if(istrue){
        alert("Login Successful");
        window.location.href="./foodindex.html";
        
    }else{
        alert("Enter Correct details");
    }

}
