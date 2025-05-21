import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const { technicalSkills, professionalSkills, languages } = resumeData.skills;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-gray-900 dark:text-white">Data Engineering & Healthcare Skills</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-450 dark:bg-blue-500"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-blue-450 dark:text-blue-400">{skill.level}</span>
                    </div>
                    <Progress value={skill.percentage} className="bg-gray-200 dark:bg-gray-700 h-2">
                      <div className="bg-blue-450 dark:bg-blue-500 h-2 rounded-full" style={{width: `${skill.percentage}%`}}></div>
                    </Progress>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skill.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="skill-tag px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm transition-transform duration-200 hover:translate-y-[-2px]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills & Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Professional Skills</h3>
              <div className="space-y-4">
                {professionalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-blue-450 dark:text-blue-400">{skill.level}</span>
                    </div>
                    <Progress value={skill.percentage} className="bg-gray-200 dark:bg-gray-700 h-2">
                      <div className="bg-blue-450 dark:bg-blue-500 h-2 rounded-full" style={{width: `${skill.percentage}%`}}></div>
                    </Progress>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-10 mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                      <span className="text-blue-450 dark:text-blue-400">{language.level}</span>
                    </div>
                    <Progress value={language.percentage} className="bg-gray-200 dark:bg-gray-700 h-2">
                      <div className="bg-blue-450 dark:bg-blue-500 h-2 rounded-full" style={{width: `${language.percentage}%`}}></div>
                    </Progress>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
