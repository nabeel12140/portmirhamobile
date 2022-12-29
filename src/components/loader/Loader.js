import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners/ClipLoader';

const Loader = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    },[])
  return (
    <div>
        {
            loading ?
            <ClipLoader
            size={150}
            color={"black"}
            loading={loading}
            />
            :
            <div>
            Loaderknnkdnvnk sjkdvdsnvjnd skdnvsdnvk 
            </div>
        }</div>
  )
}

export default Loader