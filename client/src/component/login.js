import { useState,useContext } from "react"
import { useNavigate,Link } from "react-router-dom";
import { userLogin } from "../services/api";

import { DataContext } from "../context/DataProvider";




const Login = () => {
    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const [loginText,setLoginText] =  useState({
        email: "",
        password: ""
    })





    const onInputchange = (e) => {
        setLoginText({...loginText, [e.target.name]: e.target.value});
        // console.log(loginText);
    }
    const userLoginDetail = async () => {
        const res = await userLogin(loginText);
        // console.log("Res", res)
        if (res.status == 200){
            
            setAccount(res.data.message);
            navigate("/");        
            
        }else{
            
            setLoginError(true);
            
        }
        
        

    }
    return (
        <div className="" style={{ margin: "52px 5px", padding: "10px 170px", background: '#e3e6e6', display: '', width: "100%", height: '100%' ,}} >
            <div style={{ background: '#e3e6e6', width: '100%', padding: "10px 10px", marginTop: "", display: 'flex' }}>
                <div style={{width:"70%", textAlign:"center" }}>
                    <p style={{ fontFamily:'fantasy',fontWeight:'50px' ,fontSize:"25px", marginBottom:"0px"}}>Welcome</p>
                </div>
                <div style={{width:"30%" ,textAlign:'center', padding:"2px" ,marginTop:"2px"}}>
                    <Link to={"/register"}><button style={{ marginLeft: "auto", width: "100%" }} className="btn btn-warning">Register</button></Link>
                </div>               
                
            </div>
            <div>
                <form className="row g-3 needs-validation" novalidate >
                    <div style={{ marginTop: "2px"}}>
                        <label>Email:</label>
                        <input type="email" onChange={(e)=> onInputchange(e)} id="validationCustom01" className="form-control" name="email" required ='true' />
                    </div>
                    <div style={{ marginTop: "2px"}}>
                        <label >Password:</label>
                        <input type="password" onChange={(e)=> onInputchange(e)} id="validationCustom01" className="form-control" name="password" required='true' />
                    </div >
                    {
                        loginError &&
                            <div style={{ marginTop: "10px",padding:"0px 10px"}}>
                                <p style={{ fontWeight: "500" , color:"red"}}>Please enter valid login detail</p>
                            </div>
                    }
                    <div style={{ marginTop: "20px"}}>
                        <button type="submit" onClick={()=> userLoginDetail()} className="btn btn-primary btn-lg btn-block">Login</button>
                    </div>
                </form>               
                
            </div>            

        </div>
    )
}

export default Login;