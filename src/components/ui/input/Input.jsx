import styles from './Input.module.scss';

const Input = ({ valueInput, setValueInput }) => {
	return (
		<div>
			<input
				className={styles.input_task}
				type='text'
				value={valueInput}
				onChange={event => setValueInput(event.target.value)}
			/>
		</div>
	);
};

export default Input;
