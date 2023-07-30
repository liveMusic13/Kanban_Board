import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	arrayTaskContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
} from '../Context';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import styles from './BlockTask.module.scss';

const BlockTask = ({ children, numberBlockTask }) => {
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);
	let { numberWindowTask, setNumberWindowTask } = useContext(
		numberWindowTaskContext
	);
	let { numberWindowBlockTask, setNumberWindowBlockTask } = useContext(
		numberWindowBlockTaskContext
	);

	const [veiwInput, setVeiwInput] = useState(false);
	const [valueInput, setValueInput] = useState('');

	console.log('Before updating arrayTask:', arrayTask);

	const addNewTask = () => {
		// e.preventDefault();

		const newTask = {
			id: arrayTask[0].length + 1,
			title: valueInput,
			descriptions: 'This task has no description',
		};

		setArrayTask(arrayTask[0].push(newTask));
		console.log('After updating arrayTask:', arrayTask);
		setValueInput('');
	};

	return (
		<div className={styles.blockTask}>
			<h2>{children}</h2>
			<div>
				{arrayTask[numberBlockTask].map(task => {
					return (
						<Link
							onClick={() => {
								setNumberWindowTask(task.id - 1);
								setNumberWindowBlockTask(numberBlockTask);
							}}
							to={'./windowTask'}
							key={task.id + 1}
						>
							<p className={styles.title_task} key={task.id}>
								{task.title}
							</p>
						</Link>
					);
				})}
			</div>
			{veiwInput ? (
				<>
					<Input
						className={styles.input}
						valueInput={valueInput}
						setValueInput={setValueInput}
					/>
					<Button
						setVeiwInput={setVeiwInput}
						veiwInput={veiwInput}
						addNewTask={addNewTask}
					>
						Submit
					</Button>
				</>
			) : (
				<>
					<Button setVeiwInput={setVeiwInput} veiwInput={veiwInput}>
						<img className={styles.plus} src='./plus.svg' alt='plus' /> Add card
					</Button>
				</>
			)}
		</div>
	);
};

export default BlockTask;
