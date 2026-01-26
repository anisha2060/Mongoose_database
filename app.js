// const express=require("express");
// const app=express();


// const User=require("./userModel");

// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });

// app.get("/create",async(req,res)=>{
//     const createdUser= await model.create({
//         "name":"samikshya",
//         "nickname":"nanu",
//         "email":"samikshyabhusal066@gmail.com"
//     })
//     res.send(createdUser);
// });
//app.listen(3000);

//find one

// app.get("/read",async(req,res)=>{
//      const readUser= await model.findOne(
//     {
//         "name":"samikshya",
//         // "nickname":"nanu",
//         // "email":"samikshyabhusal066@gmail.com"
//     })
//     res.send(readUser);
// });
// app.listen(3000);

//findOneAndUpdate

// app.get("/update",async(req,res)=>{
//      const updateUser= await model.findOneAndUpdate(
//         {name:"samikshya"},
//         {nickname:"hehe"},
//         {new:"true"}
//         //"nickname":"nanu"
//         // "email":"samikshyabhusal066@gmail.com"
//     )
//     res.send(updateUser);
// });
// app.listen(3000);

// app.get("/delete",async(req,res)=>{
//      const deletedUser= await model.findOneAndDelete(
//         {name:"samikshya"},
//      )
//     res.send(deletedUser);
// });
// app.listen(3000);



// app.get("/", (req, res)=>{
//     res.send("hello!!!!!!");
// });

// app.post("/create", async(req,res)=>{
//     const user = await User.create(req.body);
//     res.send(user);
// });

// app.listen(3000,()=>{
//     console.log("Server running on 3000")
// });

// const u = new User(req.body); // object banauxa
// await u.save();               // DB ma save garauxa


// const express = require("express");
// const app = express();
// const User = require("./userModel");

// app.use(express.urlencoded({ extended: true })); //HTML form support

// app.get("/", (req, res) => {
//   res.send(`
//       <form action="/create" method="POST">
//          <input type="text" name="name" placeholder="Name"/>
//          <input type="email" name="email" placeholder="Email"/>
//          <input type="text" name="nickname" placeholder="Nickname"/>
//          <button type="submit">submit</button>
//       </form>
//    `);
// });

// app.post("/create", async (req, res) => {
//   const user = await User.create(req.body);
//   res.send(`User saved!Name:${user.name},Email:${user.email}`);
// });

// app.listen(3000, () => {
//   console.log("Server running on 3000");
// });


// const express = require("express");
// const bcrypt = require ("bcrypt");
// const app = express();
// const User = require("./userModel");

// app.use(express.urlencoded({ extended: true }));

// /* ================= SIGNUP PAGE ================= */
// app.get("/signup", (req, res) => {
//   res.send(`
//     <h2>Signup</h2>
//     <form action="/signup" method="POST">
//       <input type="text" name="firstName" placeholder="First Name" required /><br/><br/>
//       <input type="text" name="lastName" placeholder="Last Name" required /><br/><br/>
//       <input type="text" name="address" placeholder="Address" required /><br/><br/>
//       <input type="email" name="email" placeholder="Email" required /><br/><br/>
//       <input type="password" name="password" placeholder="Password" required /><b r/><br/>
//       <button type="submit">Signup</button>
//     </form>
//   `);
// });

// /* ================= SIGNUP SAVE ================= */
// app.post("/signup", async (req, res) => {
//   await User.create(req.body);
//   res.redirect("/login");
// });


// /* ================= LOGIN PAGE ================= */
// app.get("/login", (req, res) => {
//   res.send(`
//     <h2>Login</h2>
//     <form action="/login" method="POST">
//       <input type="email" name="email" placeholder="Email" required /><br/><br/>
//       <input type="password" name="password" placeholder="Password" required /><br/><br/>
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// /* ================= LOGIN CHECK ================= */
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findone({ email, password});

//   if (user) {
//     res.redirect("/home");
//   } else {
//     res.send("❌ Invalid email or password");
//   }
// });

// /* ================= HOME ================= */
// app.get("/home", (req, res) => {
//   res.send("<h1>✅ You are successfully logged in</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000/signup");
// });


const jwt=require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt"); // 1️⃣ bcrypt import
const User = require("./userModel");

const app = express();
app.use(express.urlencoded({ extended: true }));
const JWT_SECRET= "SecretToken";

/* ================= SIGNUP ================= */
app.get("/signup", (req, res) => {
  res.send(`
    <h2>Signup</h2>
    <form action="/signup" method="POST">
      <input type="text" name="firstName" placeholder="First Name" required /><br/><br/>
      <input type="text" name="lastName" placeholder="Last Name" required /><br/><br/>
      <input type="text" name="address" placeholder="Address" required /><br/><br/>
      <input type="email" name="email" placeholder="Email" required /><br/><br/>
      <input type="password" name="password" placeholder="Password" required /><br/><br/>
      <button type="submit">Signup</button>
    </form>
  `);
});

/* ================= SIGNUP SAVE (hashed password) ================= */
app.post("/signup", async (req, res) => {
  try {
    // 1️⃣ Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // 2️⃣ Save user with hashed password
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      email: req.body.email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.send("Error during signup!");
  }
});

/* ================= LOGIN ================= */
app.get("/login", (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form action="/login" method="POST">
      <input type="email" name="email" placeholder="Email" required /><br/><br/>
      <input type="password" name="password" placeholder="Password" required /><br/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

// /* ================= LOGIN CHECK ================= */

/* ================= LOGIN CHECK ================= */
app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("Invalid credentials");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.send("Invalid credentials");

  const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.redirect(`/home?token=${token}`);
});

/* ================= SERVER ================= */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/signup");
});


// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.send("❌ Invalid email or password");

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) return res.send("❌ Invalid email or password");

//     // ✅ Login success → show user info
//     res.send(`
//       <h1>✅ You are successfully logged in</h1>
//       <h2>Your Information:</h2>
//       <ul>
//         <li>First Name: ${user.firstName}</li>
//         <li>Last Name: ${user.lastName}</li>
//         <li>Address: ${user.address}</li>
//         <li>Email: ${user.email}</li>
//         <li>Password (hashed): ${user.password}</li>
//       </ul>
//     `);
//   } catch (err) {
//     console.error(err);
//     res.send("Login error");
//   }
// });

// /* ================= SERVER ================= */
// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/signup");
// });