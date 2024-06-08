import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { productid } from '../../Api/Thunk';

function Detailspage() {
    const { userid } = useParams();
    // const [detail, setdetail] = useState([]);
    const [user, setuser] = useState([])
    const [qty, setqty] = useState(1)


    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productid(userid));
    }, []);
    const detail = useSelector(state => state.Products.productid.data);

    // const usr = useSelector(state => state)

    const addcart = async () => {
        // dispatch(addcart());
        const user = await fetch(`http://localhost:3000/user/${localStorage.getItem("user.id")}`)
        const usr = await user.json()
        // console.log(usr);
        const existed = usr.cart.some((value) => value.id == detail.id);
        if (existed) {
            alert("Already Added")
        }
        else {
            const updated = [...usr.cart, { ...detail, qty }]
            const updateduser = { ...usr, cart: updated }


            await axios.patch(`http://localhost:3000/user/${localStorage.getItem('user.id')}`, (updateduser))
                .then(res => alert("Added successfully")).then(window.location.reload())
        }
    }
    return (
        <div>
            <Navbar />
            <div data-theme='light' className='h-screen flex items-center justify-center'>
                <div className=" items-center card card-side bg-base-200 shadow-xl">
                    <img src={detail?.URL} className='w-1/2' alt="Movie" />
                    <div className="card-body flex flex-col items-center">

                        <h2 className="card-title font-bold text-3xl">{detail?.productname}</h2>
                        <h2 className=' text-xl font-bold'>{detail?.Category} Food</h2>
                        <p>{detail?.description}</p>
                        <label>Qty : <input type='number' onClick={e => setqty(e.target.value)}></input></label>
                        <div className="card-actions flex flex-col items-center">
                            <h1 className='text-3xl font-bold'> ₹ {detail?.Price * qty}</h1>
                            {localStorage.getItem("user.id") ? <button className="btn btn-primary" onClick={addcart}>Add To Cart</button> : <button className="btn btn-primary" onClick={() => navigate('/Login')}>Please Login</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detailspage;