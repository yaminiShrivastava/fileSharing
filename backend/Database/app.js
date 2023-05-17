import mongoose from 'mongoose'
 export default function dbConnection(){
    try{
        mongoose.connect("mongodb://localhost:27017/file_sharing")
        console.log("connected succesfully mongoDb")

    }catch(e){
        console.log("error h shit");
    }
}


