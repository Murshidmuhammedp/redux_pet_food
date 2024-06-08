import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddProduct } from '../../Api/Thunk'

function Productadd() {
    const [productname, setproname] = useState("")
    const [URL, seturl] = useState("")
    const [Category, setcategory] = useState("")
    const [description, setDescription] = useState("")
    const [Price, setPrice] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const productreg = (e) => {
        e.preventDefault()
        dispatch(AddProduct({ Category, URL, productname, description, Price }))
    }


    return (
        <>

            <div data-theme="light" className='h-screen'>
                <h1 className='text-3xl font-bold'>PRODUCT ADDING</h1>
                <form className='w-full flex flex-col items-center' onSubmit={productreg}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" onChange={e => setproname(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product URL</span>
                        </div>
                        <input required type="text" placeholder="Product URL" className="input input-bordered w-full max-w-xs" onChange={e => seturl(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select product Category</span>
                        </div>
                        <select className=" input input-bordered select select-bordered select-sm w-full max-w-xs" onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Birds">Bird</option>
                            <option value="fish">Fish</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" onChange={e => setDescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" onChange={e => setPrice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
                <button type="submit" className="btn btn-info m-4" onClick={() => navigate('propage')}>Go to product page</button>
                <button type="submit" className="btn btn-info m-4" onClick={() => navigate('userpage')}>Go to User page</button>

            </div >
        </>
    )
}

export default Productadd;