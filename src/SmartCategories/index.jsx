import React from 'react'
import { useEffect, useState } from 'react';

function SmartCategories () {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async (url) => {
        try {
            const response = await fetch(url);
            // Verifica si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud');
        }

          // Procesa la respuesta (puede ser .json(), .text(), etc.)
            const data = await response.json();
            console.log(data); // Maneja los datos de la respuesta
            setCategories(data);
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    }

    useEffect(() => {
        fetchCategories('http://localhost:5000/api/v1/categorias');
        
    }, []);
    console.log('Categorias: ', categories);
    return(
        <section className="border-b border-slate-500 mx-40 my-16 flex flex-col drop-shadow-md ">
            <h1 className=' font-DynaPuff font-semibold text-lg'>Categorias</h1>
            <section className="border-slate-500 my-16 mt-8 flex flex-row justify-between drop-shadow-md ">
                        {categories.map(cat => {
                            const colorRounded = {
                                suave: 'bg-cyan-500',
                                fuerte: 'bg-blue-500'
                            };
                            return (
                                <div key={cat.id_categoria} className=' font-DynaPuff text-sm flex flex-col ite items-center '>
                                    <h3 className=' mb-4'>{cat.nombre_categoria}</h3>
                                    <div className= {`w-44 h-44 rounded-[50%] ${cat.id_categoria % 2 === 0 ? colorRounded.suave : colorRounded.fuerte} flex justify-center items-center`}>
                                        <div className='w-40 h-40 rounded-[50%] overflow-hidden'>
                                            <img src={cat.imagen_categoria} className='font-light font-mono object-contain' alt={`Imagen de ${cat.nombre_categoria}`}></img>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        }
            </section>
        </section>
        
    );
};

export { SmartCategories }