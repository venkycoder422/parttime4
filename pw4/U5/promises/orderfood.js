var foodData=[
    {
        id:2001,
        type:"dinner",
        name:"Chicken Biriyani",
        img_url:"https://b.zmtcdn.com/data/pictures/7/19775817/c07187fbd75bf920425c6d544cceb50f_o2_featured_v2.jpg?output-format=webp",
        cost:"280",
        
        
    },

    {
        id:2002,
        type:"dinner",
        name:"Andhra Gunpowder",
        cost:"180",
        img_url:"https://b.zmtcdn.com/data/pictures/9/19852299/67451b64fc0a8c04aa751b5b0df2b7fb.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    },

    {
        id:2003,
        type:"tiffen",
        name:"Idle",
        cost:"80",
        img_url:"https://b.zmtcdn.com/data/pictures/0/18356470/37dd4d6a8f4868843f3c1019859f303c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    },

    {
        id:2004,
        type:"dinner",
        name:"Chapathi",
        cost:"60",
        img_url:"https://b.zmtcdn.com/data/dish_photos/279/92186edb4855f519de6352071043e279.jpg",
    },

    {
        id:2005,
        type:"tiffen",
        name:"Dosa",
        cost:"80",
        img_url:"https://b.zmtcdn.com/data/dish_photos/f9b/62181da69d39ec839324ee2c0ded6f9b.jpg?fit=around|130:130&crop=130:130;*,*",
    },

    {
        id:2006,
        type:"lunch",
        name:"Veg Palov",
        cost:"80",
        img_url:"https://b.zmtcdn.com/data/dish_photos/e14/4158acd06fc706146e96cede12d56e14.jpg?fit=around|130:130&crop=130:130;*,*",
    },

    {
        id:2007,
        type:"lunch",
        name:"Mutton Biriyani",
        cost:"340",
        img_url:"https://b.zmtcdn.com/data/dish_photos/562/4a052f707b7ff6f99cb6609beb6c0562.jpg?fit=around|130:130&crop=130:130;*,*",
    },

    {
        id:2008,
        type:"dinner",
        name:"Veg Biriyani",
        cost:"300",
        img_url:"https://b.zmtcdn.com/data/dish_photos/605/6ae1de43e6d75c9b04b017011dedc605.jpg?fit=around|130:130&crop=130:130;*,*",
    },

    {
        id:2009,
        type:"lunch",
        name:"Full meal",
        cost:"100",
        img_url:"https://b.zmtcdn.com/data/pictures/chains/7/91637/70e522ba03476748a657b4a95e10c412_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    },

    {
        id:20010,
        type:"tiffen",
        name:"Upma",
        cost:"80",
        img_url:"https://b.zmtcdn.com/data/dish_photos/909/753aeb99579e77e0f8562f3b893bd909.jpg?output-format=webp",
    },

    {
        id:20011,
        type:"dinner",
        name:"Pizza",
        cost:"280",
        img_url:"https://b.zmtcdn.com/data/pictures/5/19475095/b3f4049faeb18541abbc3957080c8e07_o2_featured_v2.jpg",
    },

    {
        id:20012,
        type:"dinner",
        name:"KFC",
        cost:"280",
        img_url:"https://b.zmtcdn.com/data/pictures/chains/5/90195/c89f6aa9ae824f02983d50245ed3862e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    },

    {
        id:20013,
        type:"tiffen",
        name:"Lemon Rice",
        cost:"80",
        img_url:"https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg",
    },

    {
        id:20014,
        type:"dinner",
        name:"Vennela Ice",
        cost:"280",
        img_url:"https://b.zmtcdn.com/data/dish_photos/5b1/097377d1c1e73bec8d89121978d805b1.jpg?fit=around|130:130&crop=130:130;*,*",
    },

];

var data=localStorage.setItem('foodMenu',JSON.stringify(foodData));
// Adding event lister for BUtton

document.querySelector("#button").addEventListener("click",getData);
var orderedItems=[];
function getData(){
   const items=document.querySelectorAll("#menu #data input");

 ///getting values from input boxes;

   for(var i=0; i<items.length; i++){
       if(items[i].checked){
        orderedItems.push(items[i].value);
       }

    }
   //console.log(orderedItems);

// creating promises and setting TimeOut

const createOrder=(items)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(items.length>0){
                resolve(items);
            }else{
                reject("Sorry con't create order");
                displayData(items);
            }
        },2000);
    });
};
//Calling promise funtcion;
  var readyOrder=createOrder(orderedItems)
  .then((items)=>{
      console.log("Order Ready");
      return items;
  }) .catch((err)=>{
      console.log(err);
  });
  
  //Cheking the if oredred data is have in resturent or not;
var readyData=[];
  foodData.forEach(function(item){
    for(var i=0; i<orderedItems.length; i++){
        if(item.name===orderedItems[i]){
            readyData.push(item);
        }
    }
  });
  console.log(readyData);
  displayData(readyData);
  orderedItems=[];
}
//Dispalying Data;
var isempty=false;
function displayData(item){
    document.querySelector("#container").innerText="";
    if(item.length>0){
    item.forEach(function(it){
        var box=document.createElement('div');

        var name=document.createElement('p');
        name.innertText=it.name;

        var id=document.createElement('h1');
        id.innerText="ID: "+it.id;
        id.style.textAlign="center";

        var img=document.createElement('img');
        img.src=it.img_url;

        box.append(id,name,img);
        document.querySelector("#container").append(box);
    })
}else{
    isempty=true;
}

if(isempty){
    var img=document.createElement('img');
    img.src='https://thumbs.dreamstime.com/z/sorry-re-closed-vintage-black-white-retro-sign-coffee-glass-door-cafe-coronavirus-lockdown-quarantine-owner-208402297.jpg';
    document.querySelector("#container").append(img);
}
}

/// If resturent closed 