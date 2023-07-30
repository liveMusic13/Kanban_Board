import styles from './Button.module.scss';

const Button = ({ children, setVeiwInput, veiwInput, addNewTask }) => {
	return (
		<div>
			{!veiwInput ? (
				<button className={styles.buttonAdd} onClick={() => setVeiwInput(true)}>
					{children}
				</button>
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
