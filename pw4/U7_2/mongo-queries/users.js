db.users.find({gender:"Female"});
db.users.find({gender:"Female",language:{$in:["Hindi","Kannada"]}});
db.users.find({gender:{$in:["Female","Male"]},language:{$in:["Hindi","Kannada"]}});
db.users.find({shirt_size:"S"});
db.users.find({gender:"Female",shirt_size:"XL"});

db.users.find({$or:[{gender:"Male",language:{$in:["Hindi","English"]}},{gender:"Female",language:{$in:["Kannada","German"]}}]});
db.users.find({gender:"Female",language:"Bengali",shirt_size:"XL",gender:"Male",langauge:"German",shirt_size:{$in:["L","M"]}})
db.users.find({gender:"Female",language:{$in:["Hindi","Punjabi","Bengali","Gujarati","Tamil","Malayalam"]}});
db.users.find({gender:"Male",language:"Korean"});