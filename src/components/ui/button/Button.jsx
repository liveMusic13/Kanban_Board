import styles from './Button.module.scss';

const Button = ({
	children,
	setVeiwInput,
	veiwInput,
	addNewTask,
	numberBlockTask,
	veiwMenu,
	setVeiwMenu,
}) => {
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
					}}
				>
					{children}
				</button>
			)}
		</div>
	);
};

export default Button;
