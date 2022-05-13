var arr=["assignment","media","upload","page"];

var out=arr.filter(function(element){
    if(element[0]==="a"||element[element.length-1]==="a"){
        return element;
    };
});

console.log(out);