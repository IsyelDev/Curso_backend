import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: ["user","admin"],
        default: "user",
    },
}
,{
    timestamps: true,
    versionKey: false
}

);

export default mongoose.model("users", userSchema);