import mongoose from "mongoose";



const Connection = async (URL) =>{


    

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Succesfully connection with database.");
    } catch (error) {
        console.log("Error while connnecting database", error);
        
    }
}
export default Connection;