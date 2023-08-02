import { useContext } from 'react';
import { arrayTaskContext, valueInputContext } from '../../Context';
import styles from './Button.module.scss';

const Button = ({
	children,
	setVeiwInput,
	veiwInput,
	addNewTask,
	numberBlockTask,
	veiwMenu,
	setVeiwMenu,
	inputDescription,
	titleId,
	numberTaskForMap,
}) => {
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);
	let { valueInput, setValueInput } = useContext(valueInputContext);

	const saveToLocalStorage = () => {
		// Преобразуем массив в строку перед сохранением
		const serializedArrayTask = JSON.stringify(arrayTask);
		localStorage.setItem('arrayTask', serializedArrayTask);
	};

	const buttonBacklog = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => {
					setValueInput('');
					setVeiwInput(true);
				}}
			>
				{children}
			</button>
		);
	};

	const buttonReady = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => {
					saveToLocalStorage();
					setVeiwMenu(!veiwMenu);
				}}
			>
				{children}
			</button>
		);
	};

	const buttonInProgress = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => {
					saveToLocalStorage();
					setVeiwMenu(!veiwMenu);
				}}
			>
				{children}
			</button>
		);
	};

	const buttonFinished = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => {
					saveToLocalStorage();
					setVeiwMenu(!veiwMenu);
				}}
			>
				{children}
			</button>
		);
	};

	const buttonAddDescription = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => {
					setArrayTask({
						...arrayTask,
						[numberTaskForMap]: arrayTask[numberTaskForMap].map(task => {
							if (task.id === titleId(arrayTask[numberTaskForMap])) {
								return {
									...task,
									descriptions: valueInput,
								};
							} else {
								return task;
							}
						}),
					});
					saveToLocalStorage();
				}}
			>
				{children}
			</button>
		);
	};

	return (
		<div>
			{!veiwInput ? (
				numberBlockTask === 0 ? (
					buttonBacklog()
				) : numberBlockTask === 1 ? (
					buttonReady()
				) : numberBlockTask === 2 ? (
					buttonInProgress()
				) : numberBlockTask === 3 ? (
					buttonFinished()
				) : (
					<></>
				)
			) : (
				<button
					className={styles.buttonSubmit}
					onClick={() => {
						setVeiwInput(false);
						addNewTask();
						saveToLocalStorage();
					}}
				>
					{children}
				</button>
			)}

			{inputDescription ? buttonAddDescription() : <></>}
		</div>
	);
};

export default Button;
