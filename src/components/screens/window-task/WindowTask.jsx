import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	arrayTaskContext,
	numberWindowBlockTaskContext,
	numberWindowTaskContext,
	valueInputContext,
} from '../../Context';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Button from '../../ui/button/Button';
import styles from './WindowTask.module.scss';

const WindowTask = () => {
	let { numberWindowTask, setNumberWindowTask } = useContext(
		numberWindowTaskContext
	);
	let { numberWindowBlockTask, setNumberWindowBlockTask } = useContext(
		numberWindowBlockTaskContext
	);
	let { arrayTask, setArrayTask } = useContext(arrayTaskContext);
	let { valueInput, setValueInput } = useContext(valueInputContext);

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

	const titleId = arr => {
		let foundId = null;

		arr.forEach(objTask => {
			if (objTask.id === numberWindowTask) {
				foundId = objTask.id;
			}
		});

		return foundId;
	};

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

	const navigate = useNavigate();
	const [veiwTextarea, setVeiwTextarea] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Header>Awesome Kanban Board</Header>
			<div className={styles.task_body}>
				<div className={styles.block_content}>
					<h2>{titleTask(arrayTask[numberTaskForMap])}</h2>
					{veiwTextarea ? (
						<>
							<textarea
								value={valueInput}
								onChange={event => setValueInput(event.target.value)}
							></textarea>
							<Button
								inputDescription={true}
								titleId={titleId}
								valueInput={valueInput}
								numberTaskForMap={numberTaskForMap}
							>
								Add Task
							</Button>
						</>
					) : (
						<p
							onClick={() => {
								setValueInput(descriptionTask(arrayTask[numberTaskForMap]));
								setVeiwTextarea(!veiwTextarea);
							}}
						>
							{descriptionTask(arrayTask[numberTaskForMap])}
						</p>
					)}
				</div>
				<div className={styles.block_cross} onClick={() => navigate('/')}>
					<div className={styles.cross1}></div>
					<div className={styles.cross2}></div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default WindowTask;
