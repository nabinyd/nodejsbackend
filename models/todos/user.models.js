import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    passwaord: {
        type: String,
        required: [true, "Password required"],

    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)