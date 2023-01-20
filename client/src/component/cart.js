
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState,useContext } from "react";
import {removeFromCart} from '../redux/action/cartAction'
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";



const Cart = () => {
    const { cartItem } = useSelector(state => state.cart);
    const { setMyCartLength } = useContext(DataContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    




    const totalPrice = () => {
        let price = 0, discount = 0;
        cartItem.map(data => {
            price += data.mrp;
            discount += (data.mrp - data.cost)
        });
        setPrice(price);
        setDiscount(discount);
    }

    useEffect(() => {
        totalPrice();
        setMyCartLength(cartItem.length);
    }, [cartItem]);

    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id))
        
    }
    return (
        <>
            {
                
                cartItem.length ? 

                        <div style={{ margin: "52px 5px", padding: "10px 170px", background: '#e3e6e6', display: 'flex', width: "100%", height: '100%' }}>
                            <div style={{ width: "70%" }}>
                                <div style={{ background: 'white', width: '100%', padding: "15px 25px" }}>
                                    <p style={{ height: "25px", width: "100%", fontWeight: '550', margin: "0px" }}>My Cart ({cartItem.length})</p>
                                </div>
                                <hr style={{ margin: '0px' }} />
                                {
                                    cartItem.map(data => (

                                        <div>
                                            <div style={{ background: 'white', width: '100%', padding: "10px 25px", display: "flex" }}>
                                                <div style={{ padding: "2px" }}>
                                                    <img src={data.url} alt="img" style={{ height: "200px", width: "200px", padding: '10px' }} />
                                                    <hr style={{ margin: '0px', padding: "2px 0px" }} />
                                                    <div style={{ display: 'flex', justifyContent: 'center', padding: '1px' }}>
                                                        <button style={{ borderRadius: "50%", margin: '0px 5px', padding: "4px 6px" }} >-</button>
                                                        <p style={{ margin: '0px', padding: "4px 6px" }}>1</p>
                                                        <button style={{ borderRadius: "50%", margin: '0px 5px', padding: "4px 6px" }} >+</button>
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: "10px", padding: "2px" }}>
                                                    <p style={{ fontSize: "20px", marginTop: "2px", fontWeight: '650', padding: '10px' }}>{data.longTitle}({data.shortTitle})</p>
                                                    <img src="https://storage.googleapis.com/mw-imagelibrary/amazon-choice.png" style={{ width: "150px", height: '50px' }} />

                                                    <p style={{ fontSize: "20px", margin: "5px 0px", fontWeight: "500" }}>
                                                        ${data.cost}&nbsp;&nbsp;
                                                        <strike style={{ color: '#878787', fontSize: '14px' }}>
                                                            ${data.mrp}
                                                        </strike>&nbsp;&nbsp;
                                                        <span style={{ fontSize: "12px", color: 'red' }}>
                                                            -${data.discount}
                                                        </span>
                                                    </p>
                                                    <hr style={{ margin: '0px'}} />
                                                    <div style={{ background:'white',width: '100%',padding:"10px 1px", marginTop:"",display:'flex'}}>                                        
                                                        <button style={{ marginLeft: "auto" }} onClick= {()=>removeItemFromCart(data.id)} type="button" class="btn btn-danger">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ width: '100%', margin: '2px 0px' }} />
                                        </div>
                                    ))


                                }
                            </div>
                            <div style={{ marginLeft: "5px", width: "30%", background: 'white', height: "100%" }}>
                                <div style={{ marginLeft: "5px", width: "100%", background: 'white', padding: "15px 25px", textAlign: 'center' }}>
                                    <p style={{ height: "25px", width: "100%", fontWeight: '550', margin: "0px" }}>Total</p>
                                </div>
                                <hr style={{ width: '100%', margin: '0px' }} />
                                <div style={{ marginLeft: "5px", width: "100%", background: 'white', padding: "15px 15px" }}>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500' }}>Price</p>
                                        <p style={{ marginLeft: 'auto' }}>${price.toFixed(2)}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500' }}>Discount</p>
                                        <p style={{ marginLeft: 'auto', color: 'green' }}>-{discount.toFixed(2)}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '500' }}>Delivery Charges</p>
                                        <p style={{ marginLeft: 'auto' }}>$15</p>
                                    </div>
                                    <hr style={{ margin: '0px'}} />
                                    <div style={{ display: 'flex' }}>
                                        <h4 style={{ fontWeight: '550' }}>Total Amount</h4>
                                        <h4 style={{ marginLeft: 'auto' }}>${(price - discount + 15).toFixed(2)}</h4>
                                    </div>
                                    <hr style={{ margin: '0px' }} />
                                    <div style={{ display: 'flex',padding:'4px' }}>
                                        <p style={{ fontWeight: '500', color: "red" }}>You will save {((discount / price) * 100).toFixed(0)}% in this order</p>

                                    </div>
                                    
                                    <div style={{ background: 'white', width: '100%', padding: "0px 0px" }}>
                                        <button style={{}} onClick="" type="button" class="btn btn-warning btn-lg btn-block">Place Order</button>

                                    </div>

                                </div>
                            
                                
                            </div>


                        </div>:
                        <div style={{ margin: "52px 5px", padding: "10px 170px", background: '#e3e6e6', display: 'flex', width: "100%", height: '100%' }}>
                            <div style={{ width: "90%",textAlign:"center",background:"white" }}>
                                <h1>This cart is empty</h1>                
                            </div>        
                        </div>
        }
        </>

    )
}

export default Cart;