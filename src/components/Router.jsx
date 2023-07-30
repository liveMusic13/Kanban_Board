import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import WindowTask from './screens/window-task/WindowTask';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<WindowTask />} path='/windowTask' />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
