import React from 'react'

class Homepage extends React.Component {

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
    <div>{this.state.name}</div>
    )
  }
}

export default Homepage