import React from 'react'

function About({image ,about}) {
  const alternativeImage = "https://via.placeholder.com/215Links to an external site"
  const imageUrl = image || alternativeImage 
  return (

    <aside>

   <img
    src={imageUrl}
     alt="blog logo"
      className="src" 
      onError={(e)=>(
      e.target.src = alternativeImage
      )}/> 
   <p>{about}</p>     
    </aside>
  )
}

export default About