import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, product } from '../../Api/Thunk';

function Propage() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [pdct, setpdct] = useState("Cat")
    useEffect(() => {
        dispatch(product())
       
    }, [pdct])
    const data = useSelector(state =>state.Products.products.data);
    const filteritems = data?.filter(value => value.Category == pdct)



    const deletepro = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            dispatch(deleteproduct(id))
        }
    }

    return (
        <>
            <AdminNav />

            <div className="w-full flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("Cat")}>Cat</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("Dog")}>Dog</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("Birds")}>Bird</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("fish")}>Fish</div>
                </div>
            </div>
            <div data-theme="light" className='h-screen overflow-scroll flex flex-wrap justify-evenly'>
                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <table className="table table-xs w-full">
                        <thead>
                            <tr className='text-xl'>
                                <th className="px-4 py-2">Qty</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Product name</th>
                                <th className="px-4 py-2">Details</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteritems && filteritems.map((item, index) => {
                                return (
                                    <tr key={item.id} className="border-b border-gray-200">
                                        <th className="px-4 py-2">{index + 1}</th>
                                        <td className="px-4 py-2"><img src={item.URL} className="w-20 h-20 object-cover" /></td>
                                        <td className="px-4 py-2">{item.productname}</td>
                                        <td className="px-4 py-2">{item.description}</td>
                                        <td className='px-4 py-2 font-bold'>₹{item.Price}</td>
                                        <div className='px-4 py-2 flex items-center'>
                                            <button className='btn btn-error mr-3' onClick={e => deletepro(item.id)}>Delete</button>
                                            <button className='btn btn-outline btn-warning' onClick={() => navigate(`productedit/${item.id}`)}>Edit</button>
                                        </div>
                                    </tr>


                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Propage