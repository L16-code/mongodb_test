import express from "express";
import { createDevice } from "./controllers";
const DeviceRoutes = express.Router();
DeviceRoutes.post("/create-device", createDevice);
export default DeviceRoutes