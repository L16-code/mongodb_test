import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IDeviceSchema extends Document {
    user_id: ObjectId,
    device_name: string,
    deviceType: string
}

const DeviceSchema: Schema<IDeviceSchema> = new Schema({
    device_name: { type: String, required: true },
    deviceType: { type: String ,required: true },
    user_id: { type: Schema.Types.ObjectId, required: true }
});


export const DeviceModel = mongoose.model<IDeviceSchema>('devices', DeviceSchema);