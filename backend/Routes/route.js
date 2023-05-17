import express from 'express'
import upload from '../Upload/upload.js';
import ffile from '../Models/file.js';
const router=express.Router();


router.post('/upload',upload.single('file'),async (req,res)=>{
    // console.log(req);
    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }
    try{
        const file=await ffile.create(fileObj)
        // res.status(200)
        console.log(file);
        res.status(200).json({path:`http://localhost:8000/files/${file._id}`})
    }catch(e){
        console.log(`error in route.js`)
    }
    // return res.status(200).json({msg:"everything fine"})
})
router.get('/files/:fileId',async (req,res)=>{
    try{
        const data=await ffile.findById(req.params.fileId);
        data.times++;
        await data.save;
        res.download(data.path,data.name)
    }catch(e){
        console.log(e)
    }
})
export default router;