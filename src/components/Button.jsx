import React from 'react';

function Button({ bgColor, color, label, onClick }) {
	return (
		<div className="flex items-center mt-8">
			<button className={`flex justify-center items-center h-10 p-5 ${bgColor} ${color}`} onClick={onClick}>
				{label}
			</button>
		</div>
	);
}

export default Button;
