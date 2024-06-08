import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Regiform } from '../../Api/Thunk';

function Registrationform() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Number, setnumber] = useState();
    const [DOB, setbirth] = useState();
    const [password, setpassword] = useState("");
    const [block, setblock] = useState(false);
    const [cart, setcart] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlereg = (e) => {
        e.preventDefault()
        dispatch(Regiform({ name, email, Number, DOB, password, block, cart }))
        navigate('/login');
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-between  w-1/2 h-1/2 p-3 rounded-xl shadow-2xl'>
                <div className='w-full'>
                    <h1 className="text-start m-3 text-3xl"><b>Sign Up</b></h1>
                    <h3 className="text-start m-3 ">It's quick and easy.</h3>

                </div>
                <form className='w-full' onSubmit={handlereg} >

                    <label className="input input-bordered flex items-center gap-2 w-full m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input required type="text" className="grow" placeholder="Username" onChange={e => setname(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input required type="email" className="grow" placeholder="Email" onChange={e => setemail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill='currentColor'><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" /></svg>
                        <input required type="number" className="grow" placeholder="Phone Number" onChange={e => setnumber(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="currentColor" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        <input required type="date" className="grow" placeholder="Date of birth" onChange={e => setbirth(e.target.value)} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input required type="password" className="grow" placeholder='Password' onChange={e => setpassword(e.target.value)} />
                    </label>
                    <button type='submit' className="btn btn-outline btn-success w-40  m-8 "><strong>Sign Up</strong></button>
                </form>

            </div>
        </div>

    )
}

export default Registrationform