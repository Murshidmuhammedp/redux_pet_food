import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminNav from '../Adminside/AdminNav';

function Userpage() {

    const [usrds, setusrds] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/user")
            .then(res => res.json())
            .then(res => (setusrds(res)))
    })

    const handleblock = (value) => {
        if (value.block == false) {
            (value.block = true)
        } else {
            (value.block = false)
        }

        const blk = { ...value, ...value.block }

        axios.put(`http://localhost:3000/user/${value.id}`, blk)


    }

    return (
        <>
            <AdminNav />

            <div data-theme="light" className="h-screen overflow-scroll">
                <table className="table table-zebra">
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone Number</th>
                            <th>Date of birth</th>
                        </tr>
                    </thead>
                    {usrds && usrds.map((value,index) => {
                        return (
                            <tbody key={value.id}>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.Number}</td>
                                    <td>{value.DOB}</td>
                                    <td>
                                        {value.block == true ? <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={e => handleblock(value)}>UnBlock</button> : <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={e => handleblock(value)}>Block</button>}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Userpage