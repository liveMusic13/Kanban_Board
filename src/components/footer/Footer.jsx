import { useContext } from 'react';
import { arrayTaskContext } from '../Context';
import styles from './Footer.module.scss';

const Footer = () => {
	const { arrayTask, setArrayTask } = useContext(arrayTaskContext);

	console.log(arrayTask[0].length);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block_task}>
				<p>Active tasks: {arrayTask[0].length}</p>
				<p>Finished tasks: {arrayTask[3].length}</p>
			</div>
			<p>Kanban board by Dmitriy, 27 year</p>
		</div>
	);
};

export default Footer;
