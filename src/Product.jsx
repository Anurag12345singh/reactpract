import React from 'react'

function Product(props) {
    console.log(props.userData.name, "props")
    
  return (
    <div>
        <h3>This is prduct page</h3>
        <h4>Name: {props.userData.name}</h4>
    </div>
  )
}

export default Product