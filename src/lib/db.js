import mongoose from "mongoose"



export const connectDB = async () =>{
    try{
        mongoose.connect("mongodb+srv://nayansigupta29:q8endHKFdqbdHPTT@cluster0.jki0uzp.mongodb.net/");
        console.log("Connected to database");
    }catch(err){
        console.log(err);
    }
    

}