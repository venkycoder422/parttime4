
var arr= [1,2,3,4,5,6,7,5];
var target = 10;
arr = arr.sort((a,b)=>a-b);
var n=arr.length;
function finding(arr,target,n){
    let left=0;
    var right = n-1;

    while(left<right){
        
        if(arr[left]+arr[right]===target){
            return [arr[left],arr[right]];
        }
        if(arr[left]+arr[right]<target){
            left++;
        }

        if(arr[left]+arr[right]>target){
            right--
        }
    }
}

finding();