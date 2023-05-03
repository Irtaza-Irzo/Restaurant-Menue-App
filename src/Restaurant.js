import React from 'react'
import './style.css'
import menue from './Menue'

const Restaurant = ({a})  => {
  
  return (
    <>

    {
        a.map((currentElement) => {
            return(
              <>
              <div id = 'main' key={currentElement.id} >
                 <div id='component'>
                 <span id = "number">{currentElement.id}</span>
                 <div id = "category"> {currentElement.category}</div>
                  <div id = "Name"><h1>{currentElement.Name}</h1></div>
                  <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eaque nihil, modi ipsum vero voluptatem aperiam aliquam odit dolore ipsam possimus molestias enim aspernatur architecto praesentium eum est! Ullam, impedit!
                  </div>
                 <img src={currentElement.Image} alt="" />
             </div>
           </div>
           </>
             )
         }
        )
    }
       
</>
  )
}

export default Restaurant
