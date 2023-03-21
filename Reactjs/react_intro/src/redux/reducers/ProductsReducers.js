const intialState = {
    products : [],
    singleProduct:{},
}


export const ShoppingReducers = (state= intialState, actions) =>{
    switch(actions.type){
        case "AllData":
        //  console.log(actions.payload)
         
         return {...state,products: actions.payload}
        
        case 'SingleProduct':
                
         return {...state,singleProduct:actions.payload}
          
        default:
            return state
    }


}