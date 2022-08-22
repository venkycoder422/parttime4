user1 > db.userdata.find({ gender: "Male" })
db.userdata.find({ id: { $mod: [2, 0] } })
db.userdata.find({ native: "Japan" })
db.userdata.find({ gender: "Female", native: "India" })
db.userdata.find({ age: { $gt: 25 } })
db.userdata.find({ age: { $lt: 50 }, native: "United States" })
db.userdata.find({ relocate_to: "France" }).count();
db.userdata.find({native:"United States",relocate_to:"France"}).sort({age:1})
db.userdata.find().sort({ family_members: 1 }).sort({ age: -1 });