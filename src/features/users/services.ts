import mongoose from "mongoose";
import { DeviceModel } from "../devices/model";
import { IuserData } from "./interface";
import { UserModel } from "./model";

const response: {
    message: string;
    data?: unknown;
    success: boolean;
} = { message: "", success: false };



class UserService {
    async createUser(data: IuserData) {
        try {
            const { username, phone } = data;
            const user = new UserModel({username,phone});
            const userSaved = await user.save();
            if(userSaved){
                response.message = "User created successfully";
                response.success = true;
                response.data = [];
            }else{
                response.message = "User not created";
                response.success = false;
                response.data = [];
            }
            return response;
        } catch (error) {
            response.message = "User not created";
            response.success = false;
            response.data = [];
            return response;
        }
    }
    async GetUserAndDevice(){
        try {
            const usersWithDevices = await UserModel.aggregate([
                {
                    $lookup: {
                        from: 'devices',
                        localField: '_id',
                        foreignField: 'user_id',
                        as: 'devices'
                    }
                }
            ]);
            if (usersWithDevices.length > 0) {
                response.message = "Users fetched successfully";
                response.success = true;
                response.data = usersWithDevices;
            } else {
                response.message = "No users found";
                response.success = false;
                response.data = [];
            }
            return response;
        } catch (error) {
            response.message = "User not created";
            response.success = false;
            response.data = [];
            return response;
        }
    }
    async DeleteUserAndDevice(userId:string){
        try {
            const userDeleted = await UserModel.findByIdAndDelete(userId);
            if(userDeleted){
                const user_id_obj=new mongoose.Types.ObjectId(userId)
                await DeviceModel.deleteMany({user_id:user_id_obj})
                response.message = "User deleted successfully";
                response.success = true;
                response.data = [];
            }else{
                response.message = "User not deleted";
                response.success = false;
                response.data = [];
            }
            return response;
        } catch (error) {
            response.message = "User not deleted";
            response.success = false;
            response.data = [];
            return response;
        }
    }
}


export default new UserService;
