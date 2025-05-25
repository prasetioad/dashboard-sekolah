import React from 'react'

function Panel(props:any) {
    const {label, children} = props
  return (
    <div className='p-4 border rounded-lg'>{children}</div>
  )
}

export default Panel