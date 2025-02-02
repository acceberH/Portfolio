import React, { useState } from "react";
import { motion } from "framer-motion";

import TechIcon from "@/assets/Tech.icon";
import { Technologies as TechnologiesData } from "@/lib/data";
import { Text } from "./ui/text";

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState<null | string>(null);

  return (
    <div className="relative flex flex-wrap">
      {TechnologiesData.map((technology) => (
        <div
          key={technology.id}
          className="p-4 md:relative"
          onMouseEnter={() => {
            setHoveredTech(technology.icon);
          }}
          onMouseLeave={() => {
            setHoveredTech(null);
          }}
        >
          <motion.div layoutId={technology.title}>
            <TechIcon icon={technology.icon} />
          </motion.div>
          <div className="absolute top-0 z-50 max-md:left-1/2 max-md:-translate-x-1/2 md:right-0">
            {hoveredTech === technology.icon && (
              <motion.div
                layoutId="information"
                layout="position"
                className="flex w-80 flex-col items-center rounded border bg-background p-6 text-center"
              >
                <motion.div layoutId={technology.title} className="mb-2">
                  <TechIcon icon={technology.icon} />
                </motion.div>
                <motion.p
                  className="text-white"
                  // initial={{ opacity: 0, y: 10 }}
                  // animate={{ opacity: 1, y: 0 }}
                >
                  {technology.title}
                </motion.p>
                <Text>{technology.description}</Text>
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
