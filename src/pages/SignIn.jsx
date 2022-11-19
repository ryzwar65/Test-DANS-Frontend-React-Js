import React from 'react';

function SignIn() {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<div className="flex w-[20%] h-[40%] border-2 shadow-md rounded-md">
				<div className="flex flex-col w-full">
					<div className="flex flex-col m-5 ">
						<label className="font-bold mb-3 mt-5">Email</label>
						<input className="border-2 w-full h-10 rounded-md font-thin p-3" type="text" />
					</div>
					<div className="flex flex-col m-5">
						<label className="font-bold mb-3 mt-5">Password</label>
						<input className="border-2 w-full h-10 rounded-md font-thin p-3" type="password" />
					</div>
					<div className="flex flex-col m-5">
						<button className={`flex justify-center items-center h-10 p-5 text-white bg-bluecustom`}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
