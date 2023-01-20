import {Product} from "./database/schema.js";
import { products } from "./data.js";


const DefaultData = async () =>{
    console.log("Before datainsert")
    try {
        await Product.insertMany(products);
        console.log("Data inserted succesfully ")
    } catch (error) {
        console.log("Error while inserting database ",error);
        
    }
}

export default DefaultData;