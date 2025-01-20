import React from "react";

function SmartPublic(props) {
	return (
		<section className=" lg:mx-36 lg:my-16 lg:grid lg:grid-cols-3 lg:gap-2 md:mx-36 md:my-16 md:grid md:grid-cols-3 md:gap-2 flex flex-col justify-center">
			{props.children}
		</section>
	);
}

export { SmartPublic };
