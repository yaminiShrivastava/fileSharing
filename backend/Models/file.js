import mongoose from 'mongoose'
const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true
    },
    DownloadTimes:{
        type:Number,
        default:0,
        required:true
    }
})

const ffile=mongoose.model('file',fileSchema);
export default ffile;