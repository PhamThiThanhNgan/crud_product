import React, { Component } from 'react'
import  {connect}  from 'react-redux'
import {CreateProduct,UpdateProduct} from '../action/productAction'
 class ProductFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
       values:{
        name:'',
        image:'',
        price:'',
        description:'',
       }
    }
  }
  handleSuccess=()=>{
    this.setState({
      values:{
        name:'',
        image:'',
        price:'',
        description:'',
       }
    })
  }
  handleSubmit =(evt)=>{
    const {id,...product}=this.state.values
    evt.preventDefault();
    if(id){
    this.props.UpdateProduct(id,product,this.handleSuccess)
    }else{
      this.props.CreateProduct(this.state.values,this.handleSuccess);
    }
   

  }
  handleChange =(evt)=>{
  const {name,value}=evt.target;
  this.setState((state)=>({
    values:{
      ...state.values,
      [name]:value,
    }
  }))
  }
  componentDidUpdate(prevProps){
    if(prevProps.selectproduct.id !== this.props.selectproduct.id)
    this.setState({
      values:{...this.props.selectproduct}
    })
  }
  render() {
    const {values}=this.state
    return (
        <form action="" onSubmit={this.handleSubmit}>
        <div className='row'>
        <div className='col-sm-6'>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={this.handleChange} value={values.name} name='name' id='name' className='form-control' />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="text" onChange={this.handleChange} value={values.image} name='image' id='image' className='form-control' />
          </div>
        </div>
        <div className='col-sm-6'>
        <div>
            <label htmlFor="price">price</label>
            <input type="text" onChange={this.handleChange} value={values.price} name='price' id='price' className='form-control' />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" onChange={this.handleChange} name='description' value={values.description} id='description' className='form-control' />
          </div>
        </div>
        </div>
        <button className='btn btn-dark mt-2'>Submit</button>
        </form>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    selectproduct: state.product.selectProduct,
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return{
    CreateProduct:(product,onSuccess)=>{
      dispatchEvent(CreateProduct(product,onSuccess))
    },
    UpdateProduct:(productId,product,onSuccess)=>{
      dispatchEvent(UpdateProduct(productId,product,onSuccess))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductFrom)