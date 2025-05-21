import { motion } from "framer-motion";
import { GraduationCap, IdCard } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-gray-900 dark:text-white">Education</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-450 dark:bg-blue-500"></span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-blue-450 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-450 dark:text-blue-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div 
              className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mt-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Certifications & Additional Education</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center mb-2">
                      <IdCard className="text-blue-450 dark:text-blue-400 mr-2" />
                      <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
