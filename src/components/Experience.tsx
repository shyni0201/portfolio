import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Desc = string | string[];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderDescription = (desc: Desc) => {
    if (Array.isArray(desc)) {
      return (
        <ul className="list-disc pl-5 space-y-2 text-neutral-300 text-sm sm:text-base">
          {desc.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{desc}</p>;
  };

  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-5xl space-y-8">
        {EXPERIENCES.map((exp, index) => {
          const isFlipped = activeIndex === index;

          return (
            <div
              key={index}
              className="group [perspective:1200px]"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card container */}
              <div
                className={[
                  "relative w-full rounded-2xl border border-neutral-800 bg-neutral-900/20",
                  "shadow-[0_0_30px_rgba(0,0,0,0.35)]",
                  "transition-transform duration-500 [transform-style:preserve-3d]",
                  isFlipped ? "[transform:rotateY(180deg)]" : "",
                ].join(" ")}
              >
                {/* Front */}
                <div className="p-6 sm:p-8 [backface-visibility:hidden]">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-purple-300 text-base sm:text-lg">{exp.company}</p>
                    <p className="text-neutral-400">{exp.year}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs sm:text-sm text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm text-neutral-500">
                    Hover to preview • Click to flip
                  </div>

                  {/* Click target for mobile */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isFlipped ? null : index)}
                    className="mt-3 inline-flex rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                  >
                    {isFlipped ? "Hide details" : "View details"}
                  </button>
                </div>

                {/* Back */}
                <div
                  className={[
                    "absolute inset-0 rounded-2xl p-6 sm:p-8",
                    "border border-neutral-800 bg-neutral-900/30",
                    "[transform:rotateY(180deg)] [backface-visibility:hidden]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-semibold text-white">What I did</h4>
                      <p className="text-neutral-400 mt-1">{exp.company}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-5">{renderDescription(exp.description as Desc)}</div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-900/40 bg-purple-900/10 px-3 py-1 text-xs sm:text-sm text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
