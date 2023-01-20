


export const CartReducer = (state  = {cartItem:[]},action) => {
    switch(action.type){
        case 'AddToCart':
            const item = action.payload;
            const exist = state.cartItem.find(product => product.id === item.id);

            if (exist) {
                return {...state, cartItem:state.cartItem.map(data => data.product == exist.product ? item : data)}
            } else {
                return {...state, cartItem: [...state.cartItem, item]}
            }
        case 'RemoveFromCart':
            return { ...state, cartItem: state.cartItem.filter(product => product.id !== action.payload)}

        default:
            return state;
        
    }
}