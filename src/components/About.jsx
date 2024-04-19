import React from 'react'

function About({user}) {
  return (
    <>
    <div className="card w-full min-h-screen bg-base-100 shadow-xl">
  <div className="card-body">
    <div>
    <h2 className="card-title text-5xl">About Myself</h2>
    </div>

      <div className='py-2'>

    <p className='text-4xl font-serif leading-loose  '>{user?.about?.description}</p>
      </div>
    
  </div>
</div>
    </>
  )
}

export default About