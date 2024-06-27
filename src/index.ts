import  express from "express";
import envConfig from "./config/envConfig";
import connectDB from "./db/dbConnect";
import UserRoutes from "./features/users/routes";
import DeviceRoutes from "./features/devices/routes";
const app= express();
app.use(express.json());
const env =envConfig();
const port=env.port;
connectDB()
app.use("/", UserRoutes,DeviceRoutes);
app.listen(port,()=>{
    console.log("server is running on port http://localhost:"+port);
})