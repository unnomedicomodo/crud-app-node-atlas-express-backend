import User from "../models/user.js";

//get all users
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get a user by id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update a user
const updateUser = async (req, res) => {
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
};

//delete a user
const deleteUser = async (req, res) => {
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
};   


export { getAllUser, getUserById, createUser, updateUser, deleteUser };
//jump to routes/userRoutes.js
