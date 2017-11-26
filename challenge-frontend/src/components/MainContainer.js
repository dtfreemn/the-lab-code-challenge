import React from 'react'
import HighlightImagesContainer from './HighlightImagesContainer'
import MainText from './MainText'
import MainButtonsContainer from './MainButtonsContainer'

const MainContainer = (props) => {


  return (
    <div id='main-container'>
      <HighlightImagesContainer />
      <MainText />
      <MainButtonsContainer />
    </div>
  )
}

export default MainContainer