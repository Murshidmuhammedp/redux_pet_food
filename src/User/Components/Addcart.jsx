import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Addcart() {

    const navigate=useNavigate();

    const [user, setuser] = useState()
    const [items, setitems] = useState([])
    let [price, setprice] = useState(0)


    useEffect(() => {
        fetch(`http://localhost:3000/user/${localStorage.getItem("user.id")}`)
            .then(res => res.json())
            .then(data => {
                setuser(data)
                setitems(data.cart)
            })

    }, [])

    const remove = (id) => {
        const upd = items.filter(value => value.id != id)
        setitems(upd)
        const updateduser = { ...user, cart: upd }

        axios.patch(`http://localhost:3000/user/${localStorage.getItem("user.id")}`, updateduser)


    }

    return (
        <>
            <Navbar />
            <div className='flex flex-wrap justify-evenly bg-yellow-200'>
                {items.map(value => {
                    price += (value.Price*value.qty)
                    return (

                        <div key={value.id}>
                            <div className="card card-compact w-80 m-2 bg-yellow-100 shadow-xl text-black" >
                                <figure><img src={value.URL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h1 className="font-bold text-xl text-center">{value.productname}</h1>
                                    <label className='font-bold'>Qty : {value.qty}</label>

                                    <h2 className='font-bold text-2xl'>₹ {value.Price*value.qty}</h2>

                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => remove(value.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div>
                <h1 className='font-bold text-4xl'>Sub Total : ₹ {price} /-</h1>
                <button className="btn btn-success" onClick={()=>navigate('/payment')}>Buy Now</button>
            </div>
        </>

    )
}

export default Addcart