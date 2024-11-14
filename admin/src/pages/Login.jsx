import React, {useContext, useState} from "react";
import {assets} from "../assets/assets.js";
import {AdminContext} from "../context/AdminContext.jsx";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {data} from "autoprefixer";
import {toast} from "react-toastify";

const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setAToken, backendUrl} = useContext(AdminContext)

    const onSubmitHandler=async (e )=> {
        e.preventDefault()
        try{
            if(state === 'Admin'){
                // console.log("done till now")
                // console.log(backendUrl)
                const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
                if(data.success){
                    localStorage.setItem('aToken',data.token)
                    setAToken(data.token)
                }
                else{
                    toast.error(data.message )

                }
            }

        }catch(e){
            console.log(e)

        }
    }


    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
                <p className="text-2xl font-semibold m-auto"><span className="text-blue-900">{state} </span> Login</p>
                <div className="w-full">
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} className="border border-[#DADADA] rounded w-full p-2 mt-1" type="email" required/>
                </div>
                <div className="w-full">
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} className="border border-[#DADADA] rounded w-full p-2 mt-1" type="password" required/>
                </div>
                <button className="bg-blue-900 text-white w-full py-2 rounded-md text-base">Login</button>
                {
                    state === 'Admin'
                    ? <p>Doctor Login? <span className="text-blue-900 cursor-pointer" onClick={()=>setState('Doctor')}>Click here</span></p>
                        :<p>Admin Login? <span className="text-blue-900 cursor-pointer" onClick={()=>setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login;