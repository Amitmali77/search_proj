import React from 'react'
import Data from '../components/Data'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Homescreen() {
    const[products, setproducts] = useState([])
    const[searchkey,setsearchKey]=useState('')
    const[errorMsg,setErrorMsg]=useState('')

    const getAllProducts=()=>{
        axios.get("http://localhost:8000/api/v1/getProducts")
            .then(res => {
                setproducts(res.data);
            }).catch(err => {
                alert(err)
            })
    }

    const searchHandle=(e)=>{
        setsearchKey(e.target.value)
        if(searchkey)
        {
            let docs=axios.get(`http://localhost:8000/api/v1/getproductbysearchkey/${searchkey}`)
            .then(res=>{
                if(docs){
                    setproducts(res.data);
                }
                else{
                    getAllProducts();
                }
            }).catch(err=>{
                alert(err)
            })
        }      
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div>
            <div className='filter m-auto mt-4'>
                <input
                    type="text"
                    placeholder="Search Here..."
                    className='form-control'
                    value={searchkey}
                    onChange={searchHandle}
                />
               
            </div>
           
            <div className='row justify-content-center'>
                {
                    
                    products.length>0?products.map(product => {
                        return <div key={product._id} className='col-md-3 m-5 card p-2'>
                            <Data data={product} />
                        </div>
                    })
                    :<h1>No Result Found</h1>
                }
            </div>
        </div>

    )
}


