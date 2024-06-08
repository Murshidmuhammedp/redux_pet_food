import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { product } from '../../Api/Thunk';

function Products() {
    // const [items, setitems] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch("http://localhost:3000/products")
        // .then(res => res.json())
        // .then(data => setitems(data))
        dispatch(product())

    }, [])
    const items = useSelector(state => state.Products.products.data)

    return (

        <>
            <h1 className='text-5xl text-black font-bold '>Products</h1>
            <div className='flex justify-evenly flex-wrap'>
                {items && items.map((item) => (
                    <div key={item.id} className="card w-80 bg-white shadow-xl text-black flex m-3">
                        <figure className="px-10 pt-10">
                            <img src={item.URL} alt="petfood" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h4>{item.Category} Food</h4>
                            <h2 className="card-title">{item.productname}</h2>
                            <div className="text-xl font-bold">₹{item.Price}</div>
                            <div className="card-actions">
                                <Link to={`/detailspage/${item.id}`}><button className="btn btn-primary">Show more</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products