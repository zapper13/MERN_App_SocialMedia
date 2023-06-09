import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   fistName:{
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName:{
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        min: 5,       
    },
    picture:{
        type: String,
        default: "",    
    },
    friends:{
        type: Array,
        default:[],      
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impression: Number,
},
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

