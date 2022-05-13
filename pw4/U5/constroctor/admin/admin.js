function details(name,category,img,price,gender,sold){
    this.name=name,
    this.category=category,
    this.image=img,
    this.price=price,
    this.gender=gender,
    this.sold=sold
}
var products;
if(localStorage.getItem('Products')===null){
    products=[];
}else{
    products=JSON.parse(localStorage.getItem('Products'));
}
document.querySelector("form").addEventListener("submit",function(){
event.preventDefault();

var name=document.querySelector("#name").value;
var category=document.querySelector("#category").value;
var img=document.querySelector("#image").value;
var price=document.querySelector("#price").value;
var gender=document.querySelector("#gender").value;
var sold=document.querySelector("#sold").value;
const person1 = new details(name,category,img,price,gender,sold);
products.push(person1);
localStorage.setItem('Products',JSON.stringify(products));
});
// localStorage.removeItem("Products");
