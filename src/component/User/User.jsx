import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {userid} = useParams()
 
    return(
        <>
        <h1 className='flex justify-center h-40 bg-slate-600
        items-center font-bold text-5xl'>User: {userid}</h1>
        </>
    )
}
export default User;