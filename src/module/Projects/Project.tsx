import { useParams } from "react-router-dom";

import { PROJECTS } from "./constants";
import NotFound from "../NotFound/NotFound";

const Project = () => {
    const { projectId } = useParams();
    const projects = PROJECTS;

    if (!projectId || !(projectId in projects)) {
        return <NotFound />;
    }

    const project = projects[projectId];
    return project.renderContent();
};

export default Project;