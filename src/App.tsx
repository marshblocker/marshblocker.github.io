import "./App.css";
import Header from "./component/Header/Header";
import Home from "./module/Home/Home";

function App() {
	return (
		<div className="App">
            <Header />
            <main>
                <Home />
            </main>
        </div>
	);
}

export default App;
