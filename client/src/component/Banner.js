import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../data';

const responsive = {   
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    return(
        <Carousel  
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={4000}>
            {
            bannerData.map(data => (
                <div className="bannerItem" >
                    <img src = {data.url} alt="banner" style={{height:"250px" , width:"100%"}} />
                </div>
            ))
            }      
        </Carousel>
    )
}
export default Banner;