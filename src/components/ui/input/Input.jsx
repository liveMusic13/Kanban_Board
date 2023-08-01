import { useContext } from 'react';
import { valueInputContext } from '../../Context';
import styles from './Input.module.scss';

const Input = () => {
	let { valueInput, setValueInput } = useContext(valueInputContext);

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
