import React from 'react'

function Image({style, link}) {
  return (
    <div>
        <img className={style} src={link}/>
    </div>
  )
}

export default Image