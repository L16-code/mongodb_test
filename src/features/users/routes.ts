import express from "express";
import { DeleteUserAndDevice, GetUserAndDevice, createUser } from "./controllers";
const UserRoutes = express.Router();
UserRoutes.post("/create-user", createUser);
UserRoutes.get("/get-user-devices", GetUserAndDevice);
UserRoutes.delete("/delete-user-devices/:id", DeleteUserAndDevice);
export default UserRoutes