import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IUserSchema extends Document {
    username: string,
    phone: string
}

const UserSchema: Schema<IUserSchema> = new Schema({
    username: { type: String, required: true },
    phone: { type: String },
});


export const UserModel = mongoose.model<IUserSchema>('User', UserSchema);