import { useContext } from 'react';
import { arrayTaskContext } from '../../Context';
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
	valueInput,
}) => {
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);

	const buttonBacklog = () => {
		return (
			<button className={styles.buttonAdd} onClick={() => setVeiwInput(true)}>
				{children}
			</button>
		);
	};

	const buttonReady = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => setVeiwMenu(!veiwMenu)}
			>
				{children}
			</button>
		);
	};

	const buttonInProgress = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => setVeiwMenu(!veiwMenu)}
			>
				{children}
			</button>
		);
	};

	const buttonFinished = () => {
		return (
			<button
				className={styles.buttonAdd}
				onClick={() => setVeiwMenu(!veiwMenu)}
			>
				{children}
			</button>
		);
	};

	const buttonAddDescription = () => {
		localStorage.setItem('arrayTask', JSON.stringify(arrayTask));

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
						localStorage.setItem('arrayTask', JSON.stringify(arrayTask));
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
