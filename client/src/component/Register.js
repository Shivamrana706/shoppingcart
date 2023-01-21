import { useState } from "react"
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";


const Register =() =>{
    const navigate = useNavigate();

    const [validateDetail, setValidateDetail] = useState('')
    const [register, setRegister] = useState({
        name:"",
        username:"",
        email: "",
        password:"",
        phone:""
    })

      

    const onInputChange = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
        
    }
    const regiserUserDetail = async (e) =>{
        const res = await registerUser(register);
            checkLogin();
            //navigate('/login');
        
    }

    const checkLogin = () =>{
        console.log("register.name",register.name)
        if (register.name ==  "" ){
            setValidateDetail("Enter the Name.");
        }else if(register.username ==  "" ){
            setValidateDetail("Enter the Username");
        }else if(register.email ==  "" ){
            setValidateDetail("Enter the Email.");
        }else if(register.password ==  "" ){
            setValidateDetail("Enter the Password.");
        }else if(register.phone ==  "" ){
            setValidateDetail("Enter the Phone number.")
        }else {
            navigate('/login');
        }
    }

    return(
        <div className="" style={{ margin: "52px 5px", padding: "10px 170px", background: '#e3e6e6', display: '', width: "100%", height: '100%' ,}} >
            <div className="resister" style={{padding:"10px"}}>
                
                    <div style={{ marginTop: "2px"}}>
                        <label >Name</label>
                        <input type="text" onChange={(e)=>onInputChange(e)}  className="form-control is-invalid" name="name" required='true' />
                    </div>   
                    <div style={{ marginTop: "2px"}}>
                        <label >Username:</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} className="form-control" name="username" required='true' />
                    </div>             
                    <div style={{ marginTop: "2px"}}>
                        <label>Email:</label>
                        <input type="email" onChange={(e)=>onInputChange(e)} className="form-control" name="email" required/>
                    </div>
                    <div style={{ marginTop: "2px"}}>
                        <label >Password:</label>
                        <input type="password" onChange={(e)=>onInputChange(e)} className="form-control" name="password" required />
                    </div>
                    <div style={{ marginTop: "2px"}}>
                        <label>Phone:</label>
                        <input type="phone" onChange={(e)=>onInputChange(e)} className="form-control" name="phone" required />
                    </div>

                    <div style={{ marginTop: "10px",padding:"0px 10px"}}>
                            <p style={{ fontWeight: "500" , color:"red"}}>{validateDetail}</p>
                    </div>

                    <div style={{ marginTop: "20px"}}>
                        <button type="submit" onClick={(e)=>regiserUserDetail(e)} className="btn btn-primary btn-lg btn-block">Register</button>
                    </div>
                
                
            </div>

        </div>
    )
}


export default Register;