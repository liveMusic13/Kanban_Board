import { useState } from 'react';
import styles from './Header.module.scss';

const Header = ({ children }) => {
	const [veiwMenu, setVeiwMenu] = useState(false);

	return (
		<div className={styles.wrapper}>
			<h1>{children}</h1>
			<div className={styles.block__image}>
				<div onClick={() => setVeiwMenu(!veiwMenu)}>
					<img src='./avatar.svg' alt='avatar' />
				</div>
				{veiwMenu ? (
					<>
						<img src='./arrowTop.svg' alt='arrow' />
						<ul className={styles.menu}>
							<li>Profile</li>
							<li>Logout</li>
						</ul>
					</>
				) : (
					<img src='./arrowBottom.svg' alt='arrow' />
				)}
			</div>
		</div>
	);
};

export default Header;
