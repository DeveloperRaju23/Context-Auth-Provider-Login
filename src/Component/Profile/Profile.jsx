import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
    const {user,currentUser,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success("LogOut SuccessFul !!")
        })
        .catch(error => {
            console.log(error)
        })
    }
    console.log(currentUser)
    return (
        <div className='bg-slate-800 pt-40 h-screen text-white '>
            <h1 className='text-center text-6xl py-4' >This is Profile Page</h1> 
            {
                currentUser && <div className='flex mx-auto '>
                <div className='mx-auto '>
                <span className='text-4xl'>Email : {currentUser.email}</span>  <br />
                    currentUser ?  <button onClick={handleLogOut} className='btn btn-xs mt-4 bg-black text-white primary_btn'>Sign Out</button>
                   
                </div>
                </div>
                
            }
               <ToastContainer />
        </div>
    );
};

export default Profile;