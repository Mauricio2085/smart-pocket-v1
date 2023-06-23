import React from 'react'
import './SmartMainContainer.css'

function SmartMainContainer(props) {
    return(
        <section className="flex-col flex-wrap w-full m-2 bg-cyan-500 rounded-lg drop-shadow-md ">
        <section className="w-full h-16 bg-blue-500 rounded-tl-lg rounded-tr-lg">
        </section> 
        <section className="flex flex-wrap w-full h-[454px] overflow-y-auto">
            { props.children }
        </section>
        </section>
    );
};

export { SmartMainContainer }