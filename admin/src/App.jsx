import React, {useContext} from 'react';
import Login from "./pages/Login.jsx";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {AppContext} from "./context/AppContext.jsx";
import Navbar from "./components/Navbar.jsx";
import {AdminContext} from "./context/AdminContext.jsx";
import SideBar from "./components/SideBar.jsx";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import Appointments from "./pages/Admin/Appoitments.jsx";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import DoctorsList from "./pages/Admin/DoctorsList.jsx";
const App = () => {
    const {aToken} = useContext(AdminContext)

    return aToken? (
        <div className="bg-[#F8F9FD]">
            <ToastContainer/>
            <Navbar/>


            <div className="flex items-start">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<></>}/>
                    <Route path="/admin-dashboard" element={<Dashboard/>}/>
                    <Route path="/all-appointments" element={<Appointments/>}/>
                    <Route path="/add-doctor" element={<AddDoctor/>}/>
                    <Route path="/DoctorList" element={<DoctorsList/>}/>



                </Routes>
            </div>
        </div>
    ):(
        <>
            <Login/>
            <ToastContainer/>
        </>
    )
}

export default App;