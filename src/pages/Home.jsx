import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { checkDate } from '../helpers/checkDate';
import InputCheckbox from '../components/InputCheckbox';

function Home() {
	const [ data, setdata ] = useState([]);
	const [ limit, setlimit ] = useState(6);
	const [ offset, setoffset ] = useState(0);
	const [ datasearch, setdatasearch ] = useState(false);
	const [ form, setform ] = useState({
		description: '',
		location: '',
		fulltime: false
	});

	const getData = async () => {
		const d = await axios.get('http://localhost:5000/api/job/', {
			params: {
				limit: limit,
				offset: offset
			}
		});
		if (!datasearch) {
			setdata(data.concat(d.data));
		}
		console.log(d);
	};

	const onChange = async (e) => {
		if (e.target.type == 'checkbox') {
			setform({ ...form, [e.target.name]: e.target.checked });
		} else {
			setform({ ...form, [e.target.name]: e.target.value });
		}
	};

	const searchData = async () => {
		if (form.description == '' && form.location == '' && form.fulltime == false) {
			setdatasearch(false);
			if (datasearch) {
				setdata([]);
			}
		} else {
			setdatasearch(true);
			const d = await axios.get('http://localhost:5000/api/job/search', {
				params: form
			});
			setdata(d.data);
		}
	};

	const moreClick = async () => {
		setoffset(offset + 6);
	};

	useEffect(
		() => {
			(async () => {
				await getData();
			})();
		},
		[ offset, datasearch ]
	);

	return (
		<div>
			<div className="grid grid-cols-4 gap-4 m-5">
				<div>
					<InputText
						type={'text'}
						name={'description'}
						placeholder={'Filter By Title'}
						label={'Job Description'}
						onChange={onChange}
					/>
				</div>
				<div>
					<InputText
						type={'text'}
						name={'location'}
						placeholder={'Filter By City'}
						label={'Location'}
						onChange={onChange}
					/>
				</div>
				<div className="flex items-center">
					<InputCheckbox onChange={onChange} />
					<Button label={'Search'} bgColor={'bg-bluecustom'} color={'text-white'} onClick={searchData} />
				</div>
			</div>
			<div className="flex m-5">
				<div className="flex flex-col w-full border-2 shadow-lg shadow-gray-600">
					<div className="font-semibold text-3xl m-5">Job List</div>
					<div className="flex flex-col mt-5 mx-5">
						{data.map(
							(val, index) =>
								val ? (
									<div key={index}>
										<hr />
										<Link to={`/detail/${val.id}`}>
											<div className="flex justify-between my-5">
												<div className="flex flex-col">
													<p className="text-lg font-semibold text-bluecustom">{val.title}</p>
													<div className="flex items-center">
														<p className="text-sm text-gray-600">{val.company}</p>{' '}
														<span className="mx-2"> - </span>
														<p className="text-sm text-lime-600">{val.type}</p>
													</div>
												</div>
												<div className="flex flex-col">
													<p className="text-lg font-semibold text-gray-600">
														{val.location}
													</p>
													<div className="flex items-center">
														<p className="text-sm text-gray-800">
															{checkDate(val.created_at)}
														</p>
													</div>
												</div>
											</div>
										</Link>
									</div>
								) : null
						)}
						<div className="flex justify-center w-full my-10">
							<button
								className={`flex justify-center items-center h-10 p-5 bg-bluecustom w-full text-white`}
								onClick={moreClick}
							>
								More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
