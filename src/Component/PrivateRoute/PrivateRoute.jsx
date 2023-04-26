import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import load from '../../assets/loading.png'
const PrivateRoute = ({children}) => {
    const {user,currentUser, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return  <img className='animate-spin h-20  mx-auto mt-40' src={load} alt="" />
    }
    if(currentUser){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;