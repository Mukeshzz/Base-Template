import React from 'react'
import john from '../assets/images/john.jpg'

function Hero({user}) {


  const title = `${user?.about?.name + ' - ' + user?.about?.title}`;
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={user.about.avatar.url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      
    </div>
  </div>
  
  
</div>
    </>
  )
}

export default Hero