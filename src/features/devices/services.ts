import { IDeviceData } from "./interface";
import { DeviceModel } from "./model";
const response: {
    message: string;
    data?: unknown;
    success: boolean;
} = { message: "", success: false };

class DeviceService {
    async createDevice(data:IDeviceData) {
        const { device_name, user_id, deviceType } = data;
        const device = new DeviceModel({ device_name, user_id, deviceType });
        const devicesaved=await device.save();
        if(devicesaved) {
            response.message = "Device created successfully";
            response.success = true;
            response.data = [device];
        }else{
            response.message = "Device not created";
            response.success = false;
            response.data = [];
        }
        return response;
    }
}



export default new DeviceService();