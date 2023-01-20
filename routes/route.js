import express, { response, Router } from "express";
import {Product,User} from "../database/schema.js";

const router = express.Router();

router.get('/get',async (req,res)=> {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);       

    } catch (error) {
        res.status(404).json({message: error.message});        
    }
})

router.get('/product/:id', async (req,res)=> {
    try {
        const product = await Product.find({ id: req.params.id});
        console.log("product responce fro api ",product[0])
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message}); 
        console.log(error.message)       
    }
})

router.post('/register', async (req,res)=>{
    try {
        const userExist  = await User.findOne({username:req.body.username});
        if (userExist) {
            return response.status(401).json({message: 'Username already Exist'});
        }
        const user= req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message : user});
    } catch (error) {
        res.status(500).json({message : error.message});
        
    }
})
router.post('/login', async (req,res)=> {
    try {
        const user = await User.findOne({email: req.body.email, password : req.body.password});
        if (user){
            return res.status(200).json({message:user.username});
        }else {
            return res.status(401).json("Invalid Login");
        }
        
    } catch (error) {
        res.json(400).json({message:error.message});
    }
})


export default router;

