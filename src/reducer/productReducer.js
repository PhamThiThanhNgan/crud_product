const initialState ={
    products:[],
    selectProduct:{},
    isLoading:false,
    error:null,
}
const productReducer = (state = initialState,action)=> {
    switch(action.type){
        case "loading": {
            return {...state,isLoading:true}
        }
        case "Get_Product": {
            return {...state,products:action.product,isLoading:false}
        }
        case "loading_ejected": {
            return {...state,isLoading:false,error:action.error}
        }
        case "SelectProduct": {
            return {...state,selectProduct: action.product}
        }
        default:
            return state;
    }
}

export default productReducer