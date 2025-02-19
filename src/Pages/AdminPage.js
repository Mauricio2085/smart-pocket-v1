import React from "react";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1 className="mx-auto">panel de administración</h1>
			</section>
			<Outlet />
		</>
	);
};

export { AdminPage };
<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
	<h1 className=" font-DynaPuff mx-auto my-5 ">panel de administración</h1>
</section>;
