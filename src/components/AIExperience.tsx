import { AI_EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const AIExperience: React.FC = () => {
  const container = (delay: number) => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-36">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight"
        >
          AI Innovation & Applied Experience
        </motion.h2>

        <motion.div
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-5xl w-full space-y-10"
        >
          {AI_EXPERIENCE.map((item, index) => (
            <motion.div
              key={index}
              variants={container(0.6 + index * 0.2)}
              initial="hidden"
              animate="visible"
              className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50 text-left"
            >
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400">
                  {item.company} • {item.location} • {item.period}
                </p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-neutral-300 mb-4">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIExperience;
