import express from "express";
import { config } from "dotenv";
import { addUser, blockUser, deleteUser, getAllUsers, getSpecificUser, unBlockUser, updateUser } from "./user.controller.js";
import { allowedTo, protectedRoutes } from "../auth/auth.controller.js";

const userRouter = express.Router();

config();

userRouter
    .route("/")
    .post(protectedRoutes, allowedTo('admin'), addUser)
    .get(protectedRoutes, allowedTo('admin'), getAllUsers)
userRouter
    .route("/:id")
    .put(protectedRoutes, allowedTo('admin'),  updateUser)
    .delete(protectedRoutes, allowedTo('admin'), deleteUser)
    .get(protectedRoutes, allowedTo('admin'),  getSpecificUser)

userRouter
    .route("/block/:id")
    .patch(protectedRoutes, allowedTo('admin'), blockUser)

userRouter
    .route("/unblock/:id")
    .patch(protectedRoutes, allowedTo('admin'), unBlockUser)
export default userRouter;