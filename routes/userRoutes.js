import express from "express";
import { getAllUser, getUserById, createUser, updateUser, deleteUser } from "../controller/userController.js";
const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
