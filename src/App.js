import Button from './components/Button';
import InputText from './components/InputText';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Details from './pages/Details';
import SignIn from './pages/SignIn';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					exact
					element={
						<Layouts>
							<Home />
						</Layouts>
					}
				/>
				<Route path="/signin" exact element={<SignIn />} />
				<Route
					path="/detail/:id"
					exact
					element={
						<Layouts>
							<Details />
						</Layouts>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
