import { useContext } from 'react';
import { arrayTaskContext, generateIdContext } from '../Context';
import styles from './MenuTask.module.scss';

const MenuTask = ({ numberBlockTask, veiwMenu, setVeiwMenu }) => {
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);
	const generateId = useContext(generateIdContext);

	const numberTaskForMap =
		numberBlockTask - 1 === 0
			? 'backlog'
			: numberBlockTask - 1 === 1
			? 'ready'
			: numberBlockTask - 1 === 2
			? 'inProgress'
			: null;

	const numberTaskForMapOrigin =
		numberBlockTask === 0
			? 'backlog'
			: numberBlockTask === 1
			? 'ready'
			: numberBlockTask === 2
			? 'inProgress'
			: numberBlockTask === 3
			? 'finished'
			: null;

	return (
		<>
			<ul className={styles.menu}>
				{arrayTask[numberTaskForMap].map(taskBacklog => {
					return (
						<li
							key={generateId()}
							onClick={() => {
								const newTask = {
									id: Date.now(),
									title: taskBacklog.title,
									descriptions: taskBacklog.descriptions,
								};

								setArrayTask(prevArrayTask => ({
									...prevArrayTask,
									[numberTaskForMapOrigin]: [
										...prevArrayTask[numberTaskForMapOrigin],
										newTask,
									],
									[numberTaskForMap]: prevArrayTask[numberTaskForMap].filter(
										task => task.id !== taskBacklog.id
									),
								}));

								setVeiwMenu(!veiwMenu);
							}}
						>
							{taskBacklog.title}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default MenuTask;
