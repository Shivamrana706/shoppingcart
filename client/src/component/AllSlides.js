import Slide from "./slide"
import Countdown from 'react-countdown';


const AllSlides = () => {
    return(
        <div style={{background:"#e3e6e6"}}>            
            <Slide  title="Today's Deal" timer="true" />
            <Slide title= "Curated kitchen products from women-led business"/>
            <Slide title= "Best Sellers in Computers & Accessories" />
            <Slide title= "Best Sellers in Home & Kitchen"/>
            <Slide title= "Best Sellers in Grocery & Gourmet Foods"/>
            <Slide title= "Best Sellers in Toys & Games"/>
        </div>
    )
}
export default AllSlides;