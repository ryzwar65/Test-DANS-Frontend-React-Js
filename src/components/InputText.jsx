import React from 'react';

function InputText({ label, name, placeholder, type, onChange }) {
	return (
		<div className="flex flex-col w-full">
			<div className="flex mb-2">{label}</div>
			<div className="flex">
				<input
					className="border-2 w-full h-10 rounded-md font-thin p-3"
					type={type}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

export default InputText;
