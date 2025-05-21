import { motion } from "framer-motion";
import { MapPin, Briefcase, Languages } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function AboutSection() {
  const { about } = resumeData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-gray-900 dark:text-white">About Me</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-450 dark:bg-blue-500"></span>
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={about.avatar}
                alt="Profile picture" 
                className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto border-4 border-white dark:border-gray-800" 
              />
            </motion.div>
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {about.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center">
                  <MapPin className="text-blue-450 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{about.location}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center">
                  <Briefcase className="text-blue-450 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{about.availability}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center">
                  <Languages className="text-blue-450 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{about.languages.join(", ")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
