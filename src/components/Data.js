import React from 'react'
import {Link} from 'react-router-dom'

export default function Data({data}) {
    return (
        <div>
            <div>
                <Link to={`product/${data.companyId}`} className="list">
                    <h1>{data.company}</h1>              
                    <img src={data.image} className="img-fluid" />
                    <h1>{data.headline}</h1>
                    <button className='btn btn-success' id="button">{data.CTA}</button>
                </Link>
            </div>
        </div>

    )
}


