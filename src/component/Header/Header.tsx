import "./Header.styles.css";

const Header = () => {
	return (
		<header className="Header">
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#">Posts</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
