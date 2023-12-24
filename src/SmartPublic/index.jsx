import React from "react";

function SmartPublic (props) {
    return(
        <section className=" h-64 mx-36 flex flex-row border-b border-slate-500 drop-shadow-md ">
            { props.children }
        </section>
    );
};

export { SmartPublic }