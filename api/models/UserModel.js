import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    isInSession: { type: Boolean, required: true },
    isAdmin: { type: Boolean, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = model('users', userSchema);

export default User;
