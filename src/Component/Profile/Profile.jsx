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
        <div className=''>
            <h1 className='text-center text-4xl' >This is Profile Page</h1>
            {
                currentUser && <div className='flex'>
                <div className='mx-auto text-2xl'>
                <span>Email : {currentUser.email}</span>  <br />
                 <button onClick={handleLogOut} className='btn btn-xs bg-black text-white primary_btn'>Sign Out</button>
                </div>
                </div>
                
            }
               <ToastContainer />
        </div>
    );
};

export default Profile;