import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongoBD.js";
import adminRouter from "./routes/adminroute.js";
import doctorRouter from "./routes/doctorroute.js";

import userRouter from "./routes/userRoute.js";

//app config



const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()
//middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// api end point

app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)
// localhost:3000/api/admin/add-doctor
app.get('/', (req, res)=>{
    res.send("API WORKING Done")
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

