import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="flex justify-between items-center p-5 bg-bluecustom text-white">
			<Link to="/">
				<div className="flex">
					<div className="flex items-center font-bold font-sans text-4xl">Github</div>
					<div className="flex items-center mx-1 font-thin font-sans text-3xl">Job</div>
				</div>
			</Link>
		</div>
	);
}

export default Navbar;
