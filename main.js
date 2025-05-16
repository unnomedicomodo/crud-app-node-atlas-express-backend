import dotenv from "dotenv";  // is a module that loads environment variables from a .env file into process.env
import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRoutes from "./routes/userRoutes.js";
//import bodyParser from "body-parser";

const app = express(); 

//middleware 
app.use(express.json());//middleware to parse json bodies in the request
//app.use(bodyParser.json()); //useless due to express.json()
app.use(express.urlencoded({ extended: true }));//middleware to parse urlencoded bodies in the request


dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

//routes
app.use("/api/users", userRoutes);

//get a message
app.get("/", (req, res) => {
    res.send("Hello World3");
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//jump to userController.js
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
// already implemented in routes/userRoutes.js
//get all users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//get a user by id via url params
app.get("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create a user via body
app.post("/api/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//update a user by id via url params
app.put("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        //if user is not found, return 404
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//delete a user by id via url params
app.delete("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        //if user is not found, return 404
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        //return a success message
        res.status(200).json({ message: "User deleted successfully" });  
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});              
*/

mongoose.connect(MONGO_URL, {
})
    .then(() => {
        console.log("Connected to MongoDB");
        //start the server
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log(err, "connection error");
    });






