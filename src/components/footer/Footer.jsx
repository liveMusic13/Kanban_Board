import { useContext } from 'react';
import { arrayTaskContext } from '../Context';
import styles from './Footer.module.scss';

const Footer = () => {
	const { arrayTask, setArrayTask } = useContext(arrayTaskContext);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block_task}>
				<p>Active tasks: {arrayTask.backlog.length}</p>
				<p>Finished tasks: {arrayTask.finished.length}</p>
			</div>
			<p>Kanban board by Dmitriy, 27 year</p>
		</div>
	);
};

export default Footer;
