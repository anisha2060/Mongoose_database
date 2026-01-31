// // const mongoose= require("mongoose");
// // mongoose.connect('mongodb://localhost:27017/mongodbPractise');

// // const userSchema = mongoose.Schema({
// //     name:String,
// //     nickname:String,
// //     email:String
// // });

// // module.exports = mongoose.model("user", userSchema);


// const mongoose = require ("mongoose");
// mongoose.connect('mongodb://localhost:27017/jsonwebtokenDB');

//  const userSchema = mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     address:String,
//     email:String,
//     password:String
// });

// module.exports = mongoose.model("user", userSchema);




const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/multeruseDB");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,
  photo: String,
});

module.exports = mongoose.model("User", userSchema);
