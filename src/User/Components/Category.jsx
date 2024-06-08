import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Category() {
  const navigate = useNavigate()
  const { cate } = useContext(Mycontext)
  const [data, setdata] = useState("");




  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(response => setdata(response.filter(val => val.Category == cate)))

  }, [cate])

  return (
    <>
      <Navbar/>
      <div className='bg-yellow-300  flex items-center justify-center'>
        <div className='flex justify-evenly flex-wrap'>
          {data && data.map((data) => (
            <div className="card w-80 bg-white shadow-xl text-black flex m-3">
              <figure className="px-10 pt-10">
                <img src={data.URL} alt="petfood" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h4>{data.Category} Food</h4>
                <h2 className="card-title">{data.productname}</h2>
                <div className="text-xl font-bold">₹{data.Price}</div>
                <div className="card-actions">
                  <button className="btn btn-primary" onClick={() => navigate(`/detailspage/${data.id}`)}>Show more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Category