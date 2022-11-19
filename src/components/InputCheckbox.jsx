import React from 'react';

function InputCheckbox({ onChange }) {
	return (
		<div className="flex items-center mx-4 mt-8">
			<input className="border-2 w-full h-5 rounded-md" type="checkbox" name="fulltime" onChange={onChange} />
			<label className="mx-3">Fulltime</label>
		</div>
	);
}

export default InputCheckbox;
