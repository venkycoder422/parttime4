
    
    document.querySelector("form").addEventListener('submit',signUp);
    var userData=[];
    if(localStorage.getItem("userData")===null){
            userData=[];
        }else{
            userData=JSON.parse(localStorage.getItem("userData"));
        }
    function signUp(){
        event.preventDefault();
        var userObj={
    
        name:document.getElementById("name").value,
        number:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    
        }
        userData.push(userObj);
        checking(userData);
        }
        var isCorrectData=true;
    function checking(userData){
        
            userData.forEach(function(data){
                console.log(data.name,data.email,data.number);
                if(data.name==="" || data.email==="" || data.number==="" || data.password===""){
                     isCorrectData=false;
                }
            });
        
            if(isCorrectData){
                localStorage.setItem('userData',JSON.stringify(userData));
                alert("succesfully login");
                window.location.href="login.html";
        
            }else{
                alert("Check once your details");
                
               
            }
        }