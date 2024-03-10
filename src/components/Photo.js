import React from 'react'
import eya from "../image/eya.jpg"

function Photo() {
  return (
    <div>
        <img src={eya} style={{height:'200px',width:'150px', borderRadius:'30%',marginTop:'50px'}}/>
    </div>
  )
}

export default Photo;