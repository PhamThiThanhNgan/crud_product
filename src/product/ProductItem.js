import React, { Component } from 'react'
import  {connect}  from 'react-redux'
import {DeleteProduct,SelectProduct} from '../action/productAction'
 class ProductItem extends Component {
  render() {
    const {product,DeleteProduct,SelectProduct}=this.props
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td><img src={product.image} width='70px' height='70px'/></td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>
          <button className='btn btn-success me-1' onClick={()=>SelectProduct(product.id)}>Update</button>
          <button className='btn btn-danger' onClick={()=>DeleteProduct(product.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return{
    DeleteProduct:(productId)=>{
      dispatchEvent(DeleteProduct(productId))
    }
    ,
    SelectProduct:(productId)=>{
      dispatchEvent(SelectProduct(productId))
    }
  }
}
export default connect(null,mapDispatchToProps)(ProductItem)