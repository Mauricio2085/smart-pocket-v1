import React from "react";
import './SmartAside.css'

function SmartAside() {
    return(
        <aside className="flex-col w-[26%] ml-2 mt-2 mb-3 rounded-lg">
            <section className="h-1/4 mb-1 rounded-lg ">
                <div className="h-16 bg-sky-300 border-b border-indigo-400 rounded-t-lg"></div>
                <div className="h-16 bg-sky-300 rounded-b-lg"></div>
            </section>
            <section className="h-3/4 rounded-lg bg-sky-300">
                
            </section>
        </aside>
    );
}

export { SmartAside };