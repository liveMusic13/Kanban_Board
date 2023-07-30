import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import {
	arrayTaskContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
} from './components/Context';
import Router from './components/Router';

const Main = () => {
	const [arrayTask, setArrayTask] = useState([
		[
			{
				id: 1,
				title: 'Login page – performance issues',
				descriptions: 'loremsfsa hjsafbhaflbashl fhdslfbshlf fbhlfbaf',
			},
			{
				id: 2,
				title: 'Sprint bugfix',
				descriptions: 'loremsffhdslfbshlf fbhlfbaf',
			},
		],
		[
			{
				id: 1,
				title: 'bugfix',
				descriptions: 'loremsffhdslfbfbhlfbaf',
			},
		],
		[
			{
				id: 1,
				title: 'Sprint',
				descriptions:
					'loremsffhdslfbshlf dssssssssssssssssssssssssssss fbhlfbaf',
			},
		],
		[
			{
				id: 1,
				title: 'End',
				descriptions: 'ldsffffhlokoHHHHHHHHHHHHHHhh',
			},
		],
	]);

	localStorage.setItem('arrayTask', JSON.stringify(arrayTask));
	// setArrayTask(localStorage.getItem('arrayTask'));

	const [numberWindowTask, setNumberWindowTask] = useState(null);
	const [numberWindowBlockTask, setNumberWindowBlockTask] = useState(null);

	return (
		<div>
			<arrayTaskContext.Provider value={{ arrayTask, setArrayTask }}>
				<numberWindowTaskContext.Provider
					value={{ numberWindowTask, setNumberWindowTask }}
				>
					<numberWindowBlockTaskContext.Provider
						value={{ numberWindowBlockTask, setNumberWindowBlockTask }}
					>
						<Router />
					</numberWindowBlockTaskContext.Provider>
				</numberWindowTaskContext.Provider>
			</arrayTaskContext.Provider>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
