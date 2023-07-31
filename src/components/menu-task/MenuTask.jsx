import { useContext } from 'react';
import { arrayTaskContext } from '../Context';
import styles from './MenuTask.module.scss';

const MenuTask = ({
	numberBlockTask,
	moveTaskToReady,
	veiwMenu,
	setVeiwMenu,
}) => {
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);

	return (
		<>
			<ul className={styles.menu}>
				{arrayTask[numberBlockTask - 1].map(taskBacklog => {
					return <li key={taskBacklog.id}>{taskBacklog.title}</li>;
				})}
			</ul>
		</>
	);
};

export default MenuTask;
