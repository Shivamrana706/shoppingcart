import "../css/Header.css"
import { getProducts } from '../services/api';
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";






const Header = () => {
    const { account, setAccount } = useContext(DataContext);
    const { myCartLenght } = useContext(DataContext);


    const [text, setText] = useState();
    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        getAllProducts();
    }, []);
    const getAllProducts = async () => {
        const { data } = await getProducts();
        setProducts(data);
        console.log("allProducts.data", data[0]);
        console.log("Products", products);

    }
    const getText = (etext) => {
        setText(etext);

        console.log("text", text)
    }
    const logOut = () => {
        setAccount('')
    }




    return (


        <nav class="navbar navbar-dark bg-dark" style={{ background: 'black', top: "0", zIndex: '1', position: 'fixed', width: "100%" }} >
            <div class="container-fluid " style={{ margin: "0 10% 0 10%", display: "flex", textAlign: 'center', alignItems: "center", height: "50px", width: "100%" }}>
                <div class="navbar-header" style={{ margin: "0 9px 0 9px", padding: "0 15px 0 15px" }}>
                    <a style={{textDecoration:'none'}} href="/">
                        
                        <p style={{fontFamily:"sans-serif",width:'120px',fontSize:'25px',margin:"0px",fontWeight:'500' ,color:"white", background:'black'}}>ShopingCity</p>
                    </a>
                </div>

                <div style={{ width: "40%", display: "flex", margin: "9px", padding: "0 15px 0 15px" }}>
                    <input class="form-control form-control-sm mr-3 w-75" value={text} onChange={(e) => getText(e.target.value)} type="text" placeholder="Search the product"
                        aria-label="Search" style={{ width: "70%" }} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tkI1ubL1w9aKoqnPN3AszQ8hEA_wWaGxQcvXU8zma6E_IF9DOLRQHNlTDTRlLXe4ps4&usqp=CAU" style={{ width: "25px", padding: '.5px', marginLeft: '1px' }} />





                    <>
                        {
                            text &&

                            <ul style={{ background: "white", position: "fixed", color: 'black', marginTop: '40px', marginLeft: '0dpx', width: "35%", padding: "5px" }}>
                                {
                                    products.filter(data => data.description.toLowerCase().includes(text.toLowerCase())).map(data => (
                                        <li style={{ listStyle: "none", marginTop: '1px' }}>
                                            <Link to={`/product/${data.id}`} onClick={() => setText('')} style={{ textDecoration: 'none', color: 'inherit', fontWeight: "500" }} >
                                                {data.longTitle}
                                            </Link>
                                            <hr style={{ margin: "0px", padding: '0px' }} />
                                        </li>

                                    ))
                                }

                            </ul>
                        }
                    </>
                </div>
                <div style={{ display: "flex", margin: "9px", padding: "0 15px 0 15px" }}>

                    {

                        account ? <div className="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{account}</button>
                                <div style={{ marginTop: "0px", background: '', minWidth: "90px", marginLeft: "0px", padding: "3px", width: "4%", textAlign: 'center'}} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" style={{ color: "black", textDecoration: "none" }} href="" onClick={() => logOut()}>Logout</a>

                                </div>
                            </div> :

                            
                            <Link to={'/login'} ><button class="btn btn-success" type="submit">Login</button></Link>

                    }


                </div>
                <div>

                </div>


                <div style={{ display: "flex", margin: "9px", padding: "0 15px 0 15px" }}>
                    <a href="" class="badge badge-info" style={{ padding: "10px 10px", color: "white", background: 'none' }}> More </a>
                </div>
                <div style={{ display: "flex", margin: "9px", textAlign: 'center', padding: "0 15px 0 15px" }}>
                    <a href="/cart" style={{ padding: "5px" }}>
                        <span class="glyphicon glyphicon-shopping-cart" style={{ color: "white", padding: "0 0 0 0" }}></span>
                        <span class="badge" style={{ color: "white", background: "none", padding: "0 0 0 0" }}>{myCartLenght}</span>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Header