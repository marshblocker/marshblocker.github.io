import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./module/Home/Home";
import Layout from "./module/Layout/Layout";
import NotFound from "./module/NotFound/NotFound";
import ProjectListing from "./module/Projects/ProjectListing";

function App() {
	return (
		<div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="projects/*" element={<ProjectListing />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
	);
}

export default App;
