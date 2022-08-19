const jsonwebtoken = require('jsonwebtoken');
const secret = "enkyvenkyvenky"; //this sexceret i s keep secret, and use this sign/enceode tokens;
// encrypted tokens are designed in a way that anybody can decode and understand the encryptes message.
// but they can't mimic any other message. 
const encryted_token=jsonwebtoken.sign('This is supported to be encrption',secret)
console.log(encryted_token);

const decrypted_message = jsonwebtoken.decode(encryted_token)

console.log(decrypted_message);
// const tempered_token ="eyJhbGciOiJIUzI1NiJ9.VGhpcyBpZmZmZmZkZmRzIHN1cHBvcnRlZCB0byBiZSBlbmNycHRpb24.TAE_1_YeTx7F6PolYdMZFgcxcW7hEggfPWv-1Y9XhEI"
console.log(jsonwebtoken.verify(encryted_token,secret));

