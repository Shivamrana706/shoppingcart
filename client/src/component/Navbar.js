
import { navData } from "../data";

const Navbar = () =>{
    return(
        <div className = "navbar" style={{display:"flex" , margin:"60px 130px 0 130px" }}>
            {
                navData.map(data => (
                    <div className = "navbarContent" style={{padding:"0 20px "}}>
                        <img src={data.url}  alt="nav" style={{width:"50px", height:'50px'}}/>
                        <p style={{width:"70%",textAlign:"center"}}>{data.text}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default Navbar;