import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNav from './AdminNav';
import { useDispatch, useSelector } from 'react-redux';
import { productid, proedit } from '../../Api/Thunk';

function ProductEdit() {
    const navigate = useNavigate();
    const { userid } = useParams();
    const dispatch = useDispatch()

    const [productname, setproname] = useState("")
    const [URL, seturl] = useState("")
    const [Category, setcategory] = useState("")
    const [description, setDescription] = useState("")
    const [Price, setPrice] = useState("")

    const detail = useSelector(state => state.Products.productid.data);

    useEffect(() => {
       dispatch(productid (userid))
        setproname(detail?.productname)
        seturl(detail?.URL)
        setcategory(detail?.Category)
        setDescription(detail?.description)
        setPrice(detail?.Price)
        

    }, [])

    const handleedit = (e) => {
        e.preventDefault()
        dispatch(proedit({userid ,Category, URL, productname, description, Price }))
        navigate('/admin/propage')
    }


    return (
        <div>
            <AdminNav />

            <div data-theme="light" className='h-screen '>
                <h1 className='text-3xl font-bold'>Product Editing</h1>
                <form className='w-full flex flex-col items-center' onSubmit={handleedit}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" value={productname} onChange={e => setproname(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product URL</span>
                        </div>
                        <input required type="text" placeholder="Product URL" className="input input-bordered w-full max-w-xs" value={URL} onChange={e => seturl(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select product Category</span>
                        </div>
                        <select className=" input input-bordered select select-bordered select-sm w-full max-w-xs" value={Category} onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Birds">Bird</option>
                            <option value="fish">Fish</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" value={description} onChange={e => setDescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" value={Price} onChange={e => setPrice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default ProductEdit