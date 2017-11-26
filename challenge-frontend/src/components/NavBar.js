import React from 'react'

class NavBar extends React.Component {

  state = {
    name: ''
  }

  componentDidMount() {
    this.getCompanyName()
  }

  getCompanyName = () => {
    fetch('http://localhost:8000/companies/')
      .then(resp => resp.json())
      .then(obj => this.setState(
        {
          name: obj.name
        })
      )
  }

  render() {
    return (
    <div id='nav-bar'>
      <div className='col-2'>
        <img id='nav-bar-img' src={require('../images/thelab.jpg')} alt='company-image'/>
      </div>
      <div id='company-name'>{this.state.name}</div>
      <a className='col-6 border-right' href='#'>Home</a>
      <a className='col-7 border-right' href='#'>Products</a>
      <a className='col-8 border-right' href='#'>Company</a>
      <a className='col-9' href='#'>Blog</a>
    </div>
    )
  }
}

export default NavBar