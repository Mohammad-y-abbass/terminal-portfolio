import Link from "next/link";
import projects from "@/utils/projects";

const Projects = ({ setActiveProject }) => {
  return (
    <div className="space-y-2">
      {" "}
      <p className="text-yellow-300 font-bold">
        These are my 4 favorite projects
      </p>
      {projects.map((project, index) => (
        <div key={index}>
          <p className="text-indigo-400 font-bold">{project.name}</p>
          <p className="text-green-400">{project.description}</p>
          <p
            className="text-blue-400 cursor-pointer hover:text-cyan-400 w-fit inline-block  mr-4 underline"
            onClick={() => setActiveProject(project.githubName)}
          >
            View Code
          </p>
          {project.otherLink && (
            <Link
              className="text-blue-400 cursor-pointer hover:text-cyan-400 w-fit underline"
              href={project.otherLink.link}
            >
              {project.otherLink.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
