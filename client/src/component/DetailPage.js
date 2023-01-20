import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getProductDetail } from "../services/api";
import { addToCart } from "../redux/action/cartAction";


const DetailPage = () => {
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = useParams();
    const [product, setproduct] = useState([{}]);
    const [quantity, setQuantity] = useState(1);

    useEffect(()=> {
        getProductDetailFun();
    },[getProductDetail])

    const getProductDetailFun = async () =>{
        const {data} = await getProductDetail(id);
        setproduct(data);
        console.log("Data",data[0]);
        console.log("Product", product);

    }

    const addItemToCart = () =>{
        
        dispatch(addToCart(id,quantity));
        navigate('/cart')
    }
    return(
        <>
            {
                product.map(data => (
                    <div style={{margin:"52px 5px" ,padding:"10px 170px"  , background:'#e3e6e6', display:'flex' ,width:"100%",height :'100%'}}>
                        <div style={{ background:'white',width: '40%',padding:"10px 25px",display:"" }}>
                            <img src = {data.url} alt = "img" style={{ height:"60%" ,width:"100%"}}/>
                            {/* <img src = {data.detailUrl} alt = "img" style={{ height:"20%" ,width:"50%"}}/> */}
                            
                        </div>
                        <div style={{ background:'white',width: '60%',padding:"10px 10px" ,display:""}}>
                            <p style={{fontSize:"20px" , marginTop:"2px", fontWeight:'650'}}>
                                 {data.longTitle}({data.shortTitle}) 
                            </p>
                            <img src="https://storage.googleapis.com/mw-imagelibrary/amazon-choice.png" style={{width:"150px", height:'50px'}}/>
                            <p style={{color:'#878787', fontsize:'14'}}>8 Rating & 1 Review</p>
                            <p style={{fontSize:"20px" , marginTop:"2px" ,fontWeight:"500"}}>
                                ${data.cost}&nbsp;&nbsp; 
                                <strike style={{color:'#878787', fontSize:'14px'}}>
                                    ${data.mrp}
                                </strike>&nbsp;&nbsp;
                                <span style={{fontSize:"12px",color:'red'}}>
                                    -{data.discount}
                                </span>
                            </p>
                            <p style={{fontSize:"14px" , marginTop:"2px" ,color:'green'}}><span>{data.discountText}</span></p>
                            <p style={{fontSize:"14px" , marginTop:"2px"}}>{data.tagline}</p>
                            <hr/>
                            <p style={{fontSize:"14px" , marginTop:"2px"}}>{data.description}</p>
                            <div style={{ background:'white',width: '100%',padding:"10px 1px", marginTop:"",display:'flex'}}>
                                <p style={{ marginRight: "auto" ,fontWeight:'450'}}>Delivery date and fee</p>
                                <p style={{ marginLeft: "auto" , color:''}}> {date.toDateString()} | $15</p>
                            </div>
                            <div style={{ background:'white',width: '100%',padding:"10px 1px", marginTop:"",display:'flex'}}>
                                <button style={{ marginRight: "auto" }} onClick={()=>addItemToCart()} type="button" class="btn btn-warning">Add to cart</button>
                                <button style={{ marginLeft: "auto" }} type="button" class="btn btn-warning">Buy now</button>
                            </div>
                            
                        
                            
                        </div>
                        
                    </div>
                ))
            }
        </>
    )
}

export default DetailPage