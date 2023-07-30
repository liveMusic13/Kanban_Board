import styles from './WorkingSpace.module.scss';

const WorkingSpace = ({ children }) => {
	return <div className={styles.work}>{children}</div>;
};

export default WorkingSpace;
