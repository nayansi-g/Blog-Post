import mongoose from "mongoose"


const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true 
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
    
})


const UserSchema = mongoose.model.Users || mongoose.model("Users" , userSchema)
export default UserSchema;