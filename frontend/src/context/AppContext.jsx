import {createContext, useEffect, useState} from "react";
// import {doctors} from "../assets/assets.js";
import axios from 'axios'
import {toast} from "react-toastify";

import ENDPOINT from "../constants.js";

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const currencySymbol='$'
    const backendUrl =ENDPOINT;
    const [doctors, setDoctors]= useState([])
    const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData, setUserData]= useState(false)

    console.log("run till here")

    const getDoctorsData = async()=>{
        try{
            console.log("come inside")
            const {data} =await  axios.get(backendUrl+'/api/doctor/list', {headers: {token}})

            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        }catch (error){
            toast.error(error.message)
            console.log(error)
        }
    }

    const loadUserProfileData=async ()=>{
        try{
            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers: {token}})
            if(data.success){
                setUserData(data.userData)
            }else{
                toast.error(data.message)
            }


        }catch (error){
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        getDoctorsData()
    }, []);

    useEffect(() => {
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    }, [token]);

    const value={
        doctors,getDoctorsData,
        currencySymbol,
        token, setToken, backendUrl,userData,setUserData,loadUserProfileData
    }
    return (
        <AppContext.Provider value={value}>
            {/* eslint-disable-next-line react/prop-types */}
                {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;