import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {getProducts} from '../services/api';
import { Link } from "react-router-dom"; 

import { useEffect, useState } from "react";
import Countdown from 'react-countdown';

const responsive = {   
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Slide = ({title,timer}) => {

    const [products,setProducts] = useState([{}]);
    useEffect(()=>{
        getAllProducts();
    },[]);

    const random_item = arr => [...arr].sort(() => Math.random() - 0.5);

    const getAllProducts = async () => {
        const {data} = await getProducts();
        setProducts(random_item(data));
        console.log("Products",products);
              
        
    }
    

    return(
        <div style={{ padding:'0px 0px',  margin:'10px 10px',background:"white" }}>
            <div style={{display:'flex', padding:'2px 15px',  margin:'10px 0px 0px 0px' , alignItems:'center'}}>
                <h4 style={{fontWeight: "700", margin: "0px 30px 0px 10px"}}>{title}</h4>                
                {
                    timer &&
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6NqNKVy8-QeS4xrCKR2R7cYXBrg0sm5LkA&usqp=CAU" style={{width:"20px" , height:"20px" ,padding:"2px"}} />
                            <Countdown date={Date.now() + 7.2e+7} />
                        </div>
                }                 
               
                <button class="btn btn-primary" style={{marginLeft: "auto"}}>See all  </button>

            </div>
            <hr style={{  margin:'4px 0px' }}/>
        
            <Carousel 
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={4000}
                centerMode={true}
                >
                    {
                        
                        products.map(data => (
                            <Link to={`product/${data.id}`} style={{textDecoration: "none"}}>
                                <div style={{textAlign:"center",  width:"100%", margin:"0px 2px", padding: "2px 2px"}}>
                                    <img src={data.url} alt = "img" style={{width: 'auto', height:"150px"}}/>
                                    <p style={{fontSize:"14px" , marginTop:"5px" ,fontWeight: "700"}}>{data.shortTitle}</p>
                                    <p style={{fontSize:"14px" , marginTop:"2px" , color: "white" , background:'green'}}>{data.discountText}</p>
                                    <p style={{fontSize:"14px" , marginTop:"2px"}}>{data.tagline}</p>
                                </div>
                            </Link>
                        ))
                    }                
            </Carousel>
        </div>
            
        
    )
}

export default Slide;