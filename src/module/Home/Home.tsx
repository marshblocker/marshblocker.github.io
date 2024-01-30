import Address from "../../component/Address/Address";
import "./Home.styles.css";

const Home = () => {
	return (
		<article className="Home">
			<header>
				<h1>Hello 👋</h1>
				<p className="text-intro">
					I am Gabriel Kenneth Mariñas, you can call me Kenneth, and welcome to my personal
					page. I am a Software Engineer by trade but a curious tinkerer by nature.
				</p>
				<h2>Personal Links</h2>
				<Address />
			</header>
			<section id="projects">
				<h2>Projects</h2>
				<p>
					<a href="https://marshblocker.github.io/projects/gbipg/">
						GBIPG
					</a> - A terminal application for generating color vision test
					plate from an image.
				</p>
				<p>
					<a href="https://marshblocker.github.io/projects/wikiclone/">
						WikiClone
					</a> - A clone of the Wikipedia website that includes features
					like user roles and article version control system.
				</p>
				<p>
					<a href="https://marshblocker.github.io/projects/crs-seeker/">
						CRS Seeker
					</a> - A terminal application that ranks the available courses in
					the UP CRS website based on the chance of getting in.
				</p>
			</section>
			<section id="papers">
				<h2>Papers</h2>
				<p>
					<a href="#">
						One-Class Classifier for Malicious Node Detection in
						Blockchain-based IoT Networks
					</a> - A system is proposed to secure IoT networks using
					blockchain and artificial intelligence.
				</p>
			</section>
		</article>
	);
};

export default Home;
