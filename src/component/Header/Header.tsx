import { NavLink } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
	return (
		<header className="Header">
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/posts">Posts</NavLink>
					</li>
					<li>
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
