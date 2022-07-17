users> db.users.find({gender:"Female"});

users> db.users.find({gender:"Female", $or: [{ language: { $eq:"Kannada" } }, { language: { $eq: "Hindi" } }] })

users> db.users.find({gender:"Male", language:"Hindi" },{gender:"Female" , language:"Kannada"})

users> db.users.find({shirt_size:"S"})

users> db.users.find({shirt_size:"XL",gender:"female"})

users> db.users.find({language:"English",gender:"Male",gender:"Female",language:"Hindi"})

//pending Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

users> db.users.find({language:"Bengali",gender:"Female",shirt_size:"XL"})

users> db.users.find({language:"German",gender:"Male",shirt_size:"L"})

users> db.users.find({language:"German",gender:"Male",shirt_size:"M"})

users> db.users.find({gender:"Female",$or:[{language:"Hindi"},{language:"Tamil"},{language:"Malayalam"}]})

users> db.users.find({language:"Korean",gender:"Male"})







