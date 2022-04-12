var arr="1 + 3 + 3 - 10";
var arr1=arr.split(" ");
console.log(arr1);
var add=0;
for(var i=0; i<arr1.length; i++){
    if(arr1[i]==="+"){
        add+=(+arr1[i-1]);
    } if(arr1[i]==="-"){
        add-=(+arr1[i+1]);
    }
    else if(i===arr1.length){
        if(arr1[i-1]==="+"){
            add+=+arr1[i];
        }else if(arr1[i-1]==="-"){
            add-=+arr1[i];
        }
    }
    console.log(add);
    
}
console.log(add);