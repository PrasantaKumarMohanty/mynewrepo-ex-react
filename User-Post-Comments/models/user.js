import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
    userName:{type:String, required:true, trim:true},
    age:{type:String, required:true, trim:true}
    
})

const userModel = Mongoose.model("user", userSchema)

export default userModel