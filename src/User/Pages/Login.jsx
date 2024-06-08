import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Loginuser } from '../../Api/Thunk';

function Login() {

    const [usernew, setuser] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(Loginuser())
    },[])
    const datas=useSelector(state=>state.Products.Loginuser);

    const proceedlogin = (e) => {
        e.preventDefault();
        datas&&
        datas.map(user => {
            if (user.name === usernew && user.password === password && user.block == false) {
                alert("Login successfully");
                localStorage.setItem("user.id", user.id)
                localStorage.setItem("user.name", user.name)
                navigate('/')
            } else if ("admin1234" === usernew && "admin1234" === password) {
                localStorage.setItem("usernew", usernew)
                navigate('/admin/')
            }

        })
    
}

return (
    <>
        <Navbar />
        <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-150">
                    <form className="card-body" onClick={proceedlogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" placeholder="User name" className="input input-bordered" required onChange={e => setuser(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required onChange={e => setpassword(e.target.value)} />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mt-12">
                        <button className="btn btn-success" onClick={() => navigate('/registrationform')}>Create new account</button>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Pet Foods</h1>
                    <p className="py-6">“The best way to show your love for your pet is by feeding them nutritious and high-quality food.” </p>
                </div>
            </div>
        </div>
    </>

)
}

export default Login