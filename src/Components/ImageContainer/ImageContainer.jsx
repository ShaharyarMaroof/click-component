import React from 'react'
import './styles.css'

const ImageContainer = () => {
  return (
    <div className='image-container'>
      <img alt='not found' src={require('./test-image.jpg')} />
    </div>
  )
}

export default ImageContainer