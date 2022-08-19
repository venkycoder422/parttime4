let num = 123;



    let rem;
    let res=0;
    let flag=false;
    if(num<0){
        flag=true;
    }
    num = Math.abs(num);
    while(num){
        rem = (num)%10;
        res = res * 10 + rem ;
        num = Math.floor((num)/10)
    }

    if(flag){
        console.log(res- res*2)
    }else{
        console.log(res);
    }


    var arr = [3,5,67,32]
    var data = arr.forEach((ar,i)=>{
        console.log(ar+2,i,n)
    })