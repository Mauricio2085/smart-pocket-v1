import React from "react";

function SmartPublic (props) {
    return(
        <section className=" mx-36 my-16 flex flex-row border-b border-slate-500 drop-shadow-md ">
            { props.children }
        </section>
    );
};

export { SmartPublic }