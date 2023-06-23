import React from 'react';
import image from '../Cuido_rojo.jpg'
import './Card.css'


function Card() {
    return (
        <div className="rounded-t-xl flex-col w-[203px] bg-[#d1e2e0] m-4 border">
            <picture className="rounded-l-xl">
                <img className="rounded-t-xl object-fill" src={ image } alt={image.alt} />
            </picture>
            <div className="m-2">
                <p className="text-xl mb-2">Disponible</p>
                <p className="text-md">Es un cuido increible</p>
                <div className='flex justify-between w-full'>
                    <div>
                        <p className="text-md">normal price</p>
                        <p className="text-md">250.000</p>
                    </div>
                    <div>
                        <p className="text-md">Oferta</p>
                        <p className="text-md">90.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card };