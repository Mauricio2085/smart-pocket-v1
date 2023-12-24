import React from 'react';
import image from '../assets/Cuido_rojo.jpg';
import './Card.css'

function Card(props) {
    return (
        <div className="rounded-t-xl flex-col bg-[#d1e2e0] border">
            <div className="rounded-l-xl rounded-t-xl h-24">
            <img className="w-1/2 object-fill" src={image} alt="" />
            </div>
            <div className="m-2">
                <p className="text-xl mb-2"></p>
                <p className="text-md">{props.name}</p>
                <div className='flex justify-between w-full'>
                    <div>
                        <p className="text-md">normal price</p>
                        <p className="text-md text-slate-200">{props.normalPrice}</p>
                    </div>
                    <div>
                        <p className="text-md">Oferta</p>
                        <p className="text-md">{props.productOferta}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card };