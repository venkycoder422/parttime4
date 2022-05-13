var userAfterLogin=JSON.parse(localStorage.getItem("userData"));

document.querySelector("form").addEventListener("submit",login);
var isDone=false;
function login(){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    console.log(email);
    userAfterLogin.forEach(function(data){
        if(data.email===email && data.password===password){
            isDone=true;    
        }
    });

    if(isDone){
        alert("Login succesfull")
        window.location.href="./index.html";
    }else{
        alert("invalide credintionls")
    }
}