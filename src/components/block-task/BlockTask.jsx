import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	arrayTaskContext,
	generateIdContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
} from '../Context';
import MenuTask from '../menu-task/MenuTask';
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

	const generateId = useContext(generateIdContext);
	const numberTaskForMap =
		numberBlockTask === 0
			? 'backlog'
			: numberBlockTask === 1
			? 'ready'
			: numberBlockTask === 2
			? 'inProgress'
			: numberBlockTask === 3
			? 'finished'
			: null;

	const [veiwInput, setVeiwInput] = useState(false);
	const [valueInput, setValueInput] = useState('');
	const [veiwMenu, setVeiwMenu] = useState(false);

	const addNewTask = () => {
		const newTask = {
			id: Date.now(),
			title: valueInput,
			descriptions: 'This task has no description',
		};

		if (valueInput === '') {
			return <></>;
		} else {
			setArrayTask({ ...arrayTask, backlog: [...arrayTask.backlog, newTask] });
		}

		setValueInput('');
	};

	return (
		<div className={styles.blockTask}>
			<h2>{children}</h2>
			<div>
				{arrayTask[numberTaskForMap].map(task => {
					return (
						<Link
							onClick={() => {
								setNumberWindowTask(task.id);
								setNumberWindowBlockTask(numberBlockTask);
							}}
							to={'./windowTask'}
							key={generateId()}
						>
							<p className={styles.title_task} key={generateId()}>
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
				<div className={styles.block_button_menu}>
					<Button
						setVeiwInput={setVeiwInput}
						veiwInput={veiwInput}
						numberBlockTask={numberBlockTask}
						veiwMenu={veiwMenu}
						setVeiwMenu={setVeiwMenu}
					>
						<img className={styles.plus} src='./plus.svg' alt='plus' /> Add card
					</Button>
					{veiwMenu ? (
						<MenuTask
							numberBlockTask={numberBlockTask}
							moveTaskToReady={moveTaskToReady}
							veiwMenu={veiwMenu}
							setVeiwMenu={setVeiwMenu}
						/>
					) : (
						<></>
					)}
				</div>
			)}
		</div>
	);
};

export default BlockTask;
