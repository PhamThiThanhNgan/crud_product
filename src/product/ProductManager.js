import React, { Component } from 'react'
import ProductFrom from './ProductFrom'
import ProductList from './ProductList'
import  {connect}  from 'react-redux'
import {GetProduct} from '../action/productAction'
class ProductManager extends Component {
  componentDidMount (){
    this.props.GetProduct();
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>WellCome to buy product myseft</h1>
        <ProductFrom/>
        <ProductList/>
      </div>
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return{
    GetProduct:(product)=>{
      dispatchEvent(GetProduct())
    }
  }
}
export default connect(null,mapDispatchToProps)(ProductManager)
