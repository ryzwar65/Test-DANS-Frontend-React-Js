import React from 'react';
import Navbar from '../components/Navbar';

function Layouts({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}

export default Layouts;
