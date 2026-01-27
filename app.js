// // const express=require("express");
// // const app=express();


// // const User=require("./userModel");

// // app.get("/",(req,res)=>{
// //     res.send("Hello world");
// // });

// // app.get("/create",async(req,res)=>{
// //     const createdUser= await model.create({
// //         "name":"samikshya",
// //         "nickname":"nanu",
// //         "email":"samikshyabhusal066@gmail.com"
// //     })
// //     res.send(createdUser);
// // });
// //app.listen(3000);

// //find one

// // app.get("/read",async(req,res)=>{
// //      const readUser= await model.findOne(
// //     {
// //         "name":"samikshya",
// //         // "nickname":"nanu",
// //         // "email":"samikshyabhusal066@gmail.com"
// //     })
// //     res.send(readUser);
// // });
// // app.listen(3000);

// //findOneAndUpdate

// // app.get("/update",async(req,res)=>{
// //      const updateUser= await model.findOneAndUpdate(
// //         {name:"samikshya"},
// //         {nickname:"hehe"},
// //         {new:"true"}
// //         //"nickname":"nanu"
// //         // "email":"samikshyabhusal066@gmail.com"
// //     )
// //     res.send(updateUser);
// // });
// // app.listen(3000);

// // app.get("/delete",async(req,res)=>{
// //      const deletedUser= await model.findOneAndDelete(
// //         {name:"samikshya"},
// //      )
// //     res.send(deletedUser);
// // });
// // app.listen(3000);



// // app.get("/", (req, res)=>{
// //     res.send("hello!!!!!!");
// // });

// // app.post("/create", async(req,res)=>{
// //     const user = await User.create(req.body);
// //     res.send(user);
// // });

// // app.listen(3000,()=>{
// //     console.log("Server running on 3000")
// // });

// // const u = new User(req.body); // object banauxa
// // await u.save();               // DB ma save garauxa


// // const express = require("express");
// // const app = express();
// // const User = require("./userModel");

// // app.use(express.urlencoded({ extended: true })); //HTML form support

// // app.get("/", (req, res) => {
// //   res.send(`
// //       <form action="/create" method="POST">
// //          <input type="text" name="name" placeholder="Name"/>
// //          <input type="email" name="email" placeholder="Email"/>
// //          <input type="text" name="nickname" placeholder="Nickname"/>
// //          <button type="submit">submit</button>
// //       </form>
// //    `);
// // });

// // app.post("/create", async (req, res) => {
// //   const user = await User.create(req.body);
// //   res.send(`User saved!Name:${user.name},Email:${user.email}`);
// // });

// // app.listen(3000, () => {
// //   console.log("Server running on 3000");
// // });

