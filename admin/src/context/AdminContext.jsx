import {createContext} from 'react'
import {useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export const AdminContext = createContext()
const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem('aToken'):'')
    const [doctors, setDoctors]=useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

    const getAllDoctors = async ()=>{
        try{
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{aToken}} )
            if (data.success){
                setDoctors(data.doctors)
                // console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
        }catch(e){
            toast.error(e.message)
        }
    }

    // console.log("done till now !!!")

    const changeAvailability = async(docId)=>{
        // console.log("inside")
        try{
            const {data}=await  axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers:{aToken}})
            // console.log("data",data)
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
                // console.log("now its done")
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
            console.log(error)
        }
    }
    const value = {
        aToken, setAToken,
        backendUrl,doctors,
        getAllDoctors,changeAvailability,


    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider