import Mongoose from 'mongoose';

export const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: 'users',
        }
        await Mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log('mongoDb Connected Successfully...!')
    }catch(err) {
        console.log(err);
    }
}


// export const prasant = (data)=>{

//     console.log("Prasant is ",data)
// }