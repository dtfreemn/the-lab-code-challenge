import React from 'react'

const HighlightImagesContainer = (props) => {


    return (
    <div id='highlight-images-container'>
      <div className='col-1'>
        <img className='highlight-img' src={require('../images/highlight1.jpg')} alt='first 1'/>
        <div className='align-left pad-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
      </div>
      <div className='col-2'>
        <img className='highlight-img' src={require('../images/highlight2.jpg')} alt='highlight-2'/>
        <div className='align-left pad-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
      </div>
      <div className='col-3'>
        <img className='highlight-img' src={require('../images/highlight3.jpg')} alt='highlight-3'/>
        <div className='align-left pad-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
      </div>
    </div>
  )
}

export default HighlightImagesContainer