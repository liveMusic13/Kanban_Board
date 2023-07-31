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

	const numberTaskForMap =
		numberWindowBlockTask === 0
			? 'backlog'
			: numberWindowBlockTask === 1
			? 'ready'
			: numberWindowBlockTask === 2
			? 'inProgress'
			: numberWindowBlockTask === 3
			? 'finished'
			: null;

	const titleTask = arr => {
		let foundTitle = null;

		arr.forEach(objTask => {
			if (objTask.id === numberWindowTask) {
				foundTitle = objTask.title;
			}
		});

		return foundTitle;
	};

	const descriptionTask = arr => {
		let foundDescription = null;

		arr.forEach(objTask => {
			if (objTask.id === numberWindowTask) {
				foundDescription = objTask.descriptions;
			}
		});
		return foundDescription;
	};

	return (
		<div className={styles.wrapper}>
			<Header>Awesome Kanban Board</Header>
			<div className={styles.task_body}>
				<div>
					<div></div>
					<div></div>
				</div>
				<h2>{titleTask(arrayTask[numberTaskForMap])}</h2>
				<p>{descriptionTask(arrayTask[numberTaskForMap])}</p>
			</div>
			<Footer />
		</div>
	);
};

export default WindowTask;
