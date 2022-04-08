document.querySelector('form').addEventListener('submit',checkdata);

var arr=[];
function checkdata(){
    event.preventDefault();
    var cardDetails={
        name:document.querySelector('#name').value,
        cardNum:document.querySelector('#cardNum').value,
        cardExpiry:document.querySelector('#expirydate').value,
        cvv:document.querySelector('#cvv').value,
    }
    arr.append(name,cardNum,cardExpiry,cvv);
    console.log(arr);
};