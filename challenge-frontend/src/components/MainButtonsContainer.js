import React from 'react'

const MainButtonsContainer = (props) => {

  return (
    <div id='main-buttons-container'>
      <button>Contact</button>
      <img className='main-bottom-link col-7' src={require('../images/facebook-f.jpg')} alt='first 1'/>
      <img className='main-bottom-link col-8' src={require('../images/twitter-bird.jpg')} alt='first 1'/>
    </div>
  )
}

export default MainButtonsContainer