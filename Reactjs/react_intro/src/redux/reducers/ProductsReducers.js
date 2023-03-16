const intialState = {
    products : []
}


export const ProductsReducer = (state= intialState, actions) =>{
    switch(actions.type){
        case "AllData":
        //  console.log(actions.payload)
         
         return {...state,products: actions.payload}
          
        default:
            return state
    }


}