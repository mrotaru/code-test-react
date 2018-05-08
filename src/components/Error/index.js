import React from 'react'
import './style.css'

const Error = ({ errorString }) => <div className='error'>
  {errorString}
  </div>

export default Error