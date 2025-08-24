import React from 'react'

const Navbar = (props) => {
  console.log(props) // line 6 of readme
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.data}</h3>
    </div>
  )
}

export default Navbar
