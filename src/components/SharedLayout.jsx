import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'

const SharedLayout = () => {
  const [isPath, setIsPath] = useState(false)

  // useEffect(() => {
  //   window.location.pathname 
  // }, [isPath])
  
console.log(window.location.pathname);
console.log('href', window.location.href);
  return (
    <div className='bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop bg-no-repeat bg-cover h-screen sm:h-[120vh] flex flex-col relative'>
      <Navbar />
      <main className='mt-12' >
        <Outlet />
      </main>
    </div>
  )
}

export default SharedLayout