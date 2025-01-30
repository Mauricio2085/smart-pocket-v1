import React from "react";

const Public = (props) => {
	return (
		<section className=" my-5 flex flex-col justify-center lg:mx-36 lg:my-16 lg:grid lg:grid-cols-3 lg:gap-2 md:my-16 md:grid md:grid-cols-2 md:gap-2 ">
			{props.children}
		</section>
	);
};

export { Public };
