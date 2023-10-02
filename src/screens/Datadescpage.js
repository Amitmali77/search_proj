import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Datadescpage() 
{
    const params =useParams();
    const[product,setproduct]=useState([]);
    const[options,setChangesOptions]=useState([]);
    const[error,setError]=useState("");
    
    useEffect(()=>{
        const id=parseInt(params.id);
        axios.post("http://localhost:8000/api/v1/getproductbyid",{id})
        .then(res=>{
            setproduct(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-6 mt-3'>
                    <div className='card p-2 m-2'>
                        <h1>{product.company}</h1>
                        <img src={product.image} className="bigimg m-auto"/>
                        <h1>{product.headline}</h1>
                        <p>{product.primaryText}</p>
                        <p>{product.description}</p>
                        <a href="#" className='link1'>{product.url}</a>
                    </div>
                </div>
            </div>
        </div>        
    )
}


