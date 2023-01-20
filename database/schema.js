import mongoose from "mongoose";

const produtSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    url: String,
    detailUrl: String,
    shortTitle:String,
    longTitle:String,
    mrp:Number,
    cost:Number,
    discount:String,    
    quantity: Number,
    description: String,
    discount: String,
    discountText: String,
    tagline: String
});

const registerUser = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true        
    },
    phone:{
        type:String,
        required:true
        
    }
})

export const Product  = mongoose.model("product",produtSchema);
export const User  = mongoose.model("wesiteUser",registerUser);