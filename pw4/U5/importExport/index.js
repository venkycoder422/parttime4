
import navbar from "./navbar.js";

document.querySelector("#main_div").innerHTML=navbar();

let name=document.querySelector("#searchInput").value;

if(name===""){
    const random = async() =>{
        try {
            let response= await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
            let data= await response.json();
            var heading=document.createElement('h1');
            displayData(data.meals)
            heading.innerText="Today Special";
            heading.style.textAlign="left"
            container.append(heading);
        } catch (error) {
            
        }
    }
    random();
}
    //here fetch not declared
     const fetchData = async(e) => {
         //console.log(e)
        let name=document.querySelector("#searchInput").value;
        //console.log(name);
    try{
        
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let data= await response.json();
        console.log(data);
        displayData(data.meals);
    }catch(err){
        console.log(err);
    }
   
    
        //console.log(data.meals);
    } 

    
     


//www.themealdb.com/api/json/v1/1/random.php

//Redering data;idMeal: "52928";strMealThumb: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg";

const displayData=(data)=>{
    container.innerText='';
data.forEach(element => {
    let box=document.createElement('div');

    let id=document.createElement('h3');
    id.innerText=element.idMeal;

    let name=document.createElement('h3');
    name.innerText=element.strMeal;

    let img=document.createElement('img');
    img.src=element.strMealThumb;

    box.append(img,id,name);

    document.querySelector('#container').append(box);
    
});
}

//Debounce after 1000 sec;




function debounce(func,delay){
    var timerId;
  
    return function (e){
        if(timerId){
            clearTimeout(timerId);
        }
    timerId=setTimeout(function(){
        func(e);
    },delay);
}
}


let input = document.querySelector("#searchInput")
input.addEventListener("input",debounce(fetchData,1000))

