import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import {
	arrayTaskContext,
	generateIdContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
	valueInputContext,
} from './components/Context';
import Router from './components/Router';

const Main = () => {
	const generateId = () => {
		return Math.random() + Math.random();
	};

	const [arrayTask, setArrayTask] = useState({
		backlog: [
			{
				id: generateId(),
				title: 'Login page – performance issues',
				descriptions: 'loremsfsa hjsafbhaflbashl fhdslfbshlf fbhlfbaf',
			},
			{
				id: generateId(),
				title: 'Sprint bugfix',
				descriptions: 'loremsffhdslfbshlf fbhlfbaf',
			},
		],
		ready: [
			{
				id: generateId(),
				title: 'bugfix',
				descriptions: 'loremsffhdslfbfbhlfbaf',
			},
		],
		inProgress: [
			{
				id: generateId(),
				title: 'Sprint',
				descriptions:
					'loremsffhdslfbshlf dssssssssssssssssssssssssssss fbhlfbaf',
			},
		],
		finished: [
			{
				id: generateId(),
				title: 'End',
				descriptions: 'ldsffffhlokoHHHHHHHHHHHHHHhh',
			},
		],
	});

	const [numberWindowTask, setNumberWindowTask] = useState(null);
	const [numberWindowBlockTask, setNumberWindowBlockTask] = useState(null);
	const [valueInput, setValueInput] = useState('');

	// setArrayTask(localStorage.getItem('arrayTask'));

	return (
		<div>
			<valueInputContext.Provider value={{ valueInput, setValueInput }}>
				<generateIdContext.Provider value={generateId}>
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
				</generateIdContext.Provider>
			</valueInputContext.Provider>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
