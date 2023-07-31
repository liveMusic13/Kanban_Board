import BlockTask from '../../block-task/BlockTask';
import Header from '../../header/Header';
import WorkingSpace from '../../working-space/WorkingSpace';

const Home = () => {
	const arrayBlockTask = [
		{
			id: 1,
			title: 'Backlog',
		},
		{
			id: 2,
			title: 'Ready',
		},
		{
			id: 3,
			title: 'In Progress',
		},
		{
			id: 4,
			title: 'Finished',
		},
	];

	return (
		<div>
			<Header>Awesome Kanban Board</Header>
			<WorkingSpace>
				{arrayBlockTask.map((blockTask, index) => {
					return (
						<BlockTask numberBlockTask={index} key={blockTask.id}>
							{blockTask.title}
						</BlockTask>
					);
				})}
			</WorkingSpace>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
