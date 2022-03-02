import express from 'express';
import { getUsers, getUser, deleteUser, createUser, updateUser } from "../controllers/users.js";

const router = express.Router();



// all users
router.get("/", getUsers);

// get user
router.get("/:id", getUser);

// delete user
router.delete("/", deleteUser);

// create user
router.post("/", createUser);

// update user
router.patch("/:id", updateUser);

export default router;
