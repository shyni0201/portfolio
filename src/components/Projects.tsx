import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { trackEvent } from "../utils/analytics";

const Projects: React.FC = () => {
  const handleProjectView = (projectTitle: string) => {
    trackEvent("view", "project", projectTitle);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-xl border border-neutral-800 bg-neutral-900/20 p-6"
            onViewportEnter={() => handleProjectView(project.title)}
          >
            <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mb-4 flex gap-3">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 transition"
    >
      GitHub
    </a>
  )}
  </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
