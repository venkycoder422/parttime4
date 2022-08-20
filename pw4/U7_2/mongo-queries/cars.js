db.cars.find({gender:"Male",car_color:"Pink"});
db.cars.find({gender:"Female",$or:[{"car_color":"Red",car_color:"Pink"}]});
db.cars.find({gender:"Male",purchase_year:"1998"});
db.cars.find({gender:"Female",purchase_year:"1985",car_color:"Yellow"});
db.cars.find({gender:"Male",$and:[{$or:[{"car_color":"Red","car_color":"Green"}],$or:[{country:"Germany",country:"Kenya"}]}]});
db.cars.find({country:"India",purchase_year:"2001"});
db.cars.find({$or:[{"country":"Germany"},{"country":"Egypt"},{purchase_year:"1998"},{purchase_year:"1992"}]});
db.cars.find({gender:"Female",country:"India",car_color:"Blue"});

db.cars.find({car_color:"Green",gender:"Female",country:{$not:/Pakistan/}});