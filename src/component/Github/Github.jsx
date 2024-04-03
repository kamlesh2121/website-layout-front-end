// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect( () =>{
    //     fetch('https://api.github.com/users/kamlesh2121')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])
    return(
        <>
        <div className=' flex text-center justify-center items-center  bg-gray-600 text-white p-4'>
            <img src={data.avatar_url} alt="git profile" width='100' />
            <div className='text-5xl ml-3'>
             Github Followers: {data.followers}
            </div>
        </div>
        </>
    )
}

// useLoaderData  loader conscept

export default Github;

export const userloaderInfo = async () =>{
   const response = await fetch('https://api.github.com/users/kamlesh2121')
    return response.json()
}