import {doctorModel} from "../models/doctormodel.js";

const changeAvailability = async(req, res)=>{
    try{
        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        console.log(docData)

        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({success:true, message:'Availability Changed'})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const doctorList = async(req, res)=>{
    try{
        const doctors = await doctorModel.find({}).select(['-password', '-email'])
        console.log(doctors)
        res.json({success:true, doctors})
    }catch (e) {
        console.log(e)
        res.json({success:false, message:e.message})

    }
}
export  {changeAvailability, doctorList}