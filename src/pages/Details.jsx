import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
	let { id } = useParams();

	const [ data, setdata ] = useState({});

	const dataById = async () => {
		const d = await axios.get(`http://localhost:5000/api/job/${id}`);
		console.log(d);
		setdata(d.data);
	};

	useEffect(() => {
		(async () => {
			await dataById();
		})();
	}, []);

	return (
		<div className="flex flex-col m-5">
			<div className="flex">
				<Link to="/" className="text-bluecustom font-bold text-2xl">
					Back
				</Link>
			</div>
			<div className="flex flex-col w-full border-2 shadow-lg shadow-gray-600 mt-5">
				<div className="flex flex-col">
					<div className="flex mt-5 mx-5">
						<div className="font-bold text-gray-500">{data.type}</div> <span className="mx-2">/</span>{' '}
						<div className="font-bold text-gray-500">{data.location}</div>
					</div>
					<div className="flex mx-5 mb-10 text-4xl text-bluecustom font-bold">{data.title}</div>
				</div>
				<hr />
				<div className="text-3xl font-bold mx-5">{data.company}</div>
				<div className="grid grid-cols-2 gap-4 m-5">
					<div className="flex flex-wrap">
						<div dangerouslySetInnerHTML={{ __html: data.descriptions }} />
					</div>
					<div className="flex flex-col items-center">
						<div className="p-5 flex justify-center items-center w-72 bg-gray-400 h-72 mb-5">
							<img src={data.company_logo} className="w-56 h-56" />
						</div>
						<div className="p-5 flex justify-center items-center bg-gray-400 flex-wrap">
							<div className="wordBreak" dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;
