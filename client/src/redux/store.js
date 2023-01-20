import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from '@redux-devtools/extension';

import { CartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    cart: CartReducer,
    
})


const middleware = [thunk];

const Store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;