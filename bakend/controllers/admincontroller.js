import validator from 'validator';
import bcrypt from "bcrypt";
import { v2 as cloudinary } from 'cloudinary';
import {doctorModel} from "../models/doctormodel.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/usermodel.js";
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degrees, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Check for missing required fields
        if (!name || !email || !password || !speciality || !degrees || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing details" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image if provided
        let imageUrl = "";
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            imageUrl = imageUpload.secure_url;
        }

        // Prepare doctor data
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degrees,
            experience,
            about,
            fees,
            address: JSON.parse(req.body.address),
            date: Date.now(),
        };

        // Save to database
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor Added" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Error creating doctor" });
    }
}

//api for admin login

const loginAdmin = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(email === process.env.ADMIN_EMAIL  && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token});
        }else{
            res.json({success:false, message: "Invalid credentials"});
        }


    }catch (err){
        console.log(err)
        res.json({ success: false, message: err.message });
    }
}

// api to get all doctors data for admin panel

const allDoctors = async (req, res)=>{
    try{
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
    }catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// api to delete user






export { addDoctor,allDoctors, loginAdmin };
