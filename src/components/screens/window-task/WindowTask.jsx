import { useContext } from 'react';
import {
	arrayTaskContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
} from '../../Context';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import styles from './WindowTask.module.scss';

const WindowTask = () => {
	let { numberWindowTask, setNumberWindowTask } = useContext(
		numberWindowTaskContext
	);
	let { numberWindowBlockTask, setNumberWindowBlockTask } = useContext(
		numberWindowBlockTaskContext
	);
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);

	return (
		<div className={styles.wrapper}>
			<Header>Awesome Kanban Board</Header>
			<div className={styles.task_body}>
				<div>
					<div></div>
					<div></div>
				</div>
				<h2>{arrayTask[numberWindowBlockTask][numberWindowTask].title}</h2>
				<p>{arrayTask[numberWindowBlockTask][numberWindowTask].descriptions}</p>
			</div>
			<Footer />
		</div>
	);
};

export default WindowTask;
