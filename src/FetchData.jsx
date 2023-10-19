import React from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
export default function FetchData  (){
    console.log("hujh")
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
        .then(res=> setData(res.data.users))
        .catch(err=>console.log(err))
    }, [])
    return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Dummy data</h3>
            <table className='table'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Profile pic</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=>{
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td><img className='image' src={user.image}/></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
