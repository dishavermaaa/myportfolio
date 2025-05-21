import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface TimelineItemProps {
  job: {
    title: string;
    company: string;
    period: { start: string; end: string | null };
    description: string[];
    skills: string[];
  };
  index: number;
}

const TimelineItem = ({ job, index }: TimelineItemProps) => {
  const endDate = job.period.end ? formatDate(job.period.end) : "Present";
  const startDate = formatDate(job.period.start);
  
  return (
    <motion.div 
      className="timeline-item flex flex-col md:flex-row relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:w-1/3 mb-4 md:mb-0">
        <div className="md:text-right md:pr-12">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{job.title}</h3>
          <p className="text-blue-450 dark:text-blue-400 font-medium">{job.company}</p>
          <p className="text-gray-500 dark:text-gray-400">{startDate} - {endDate}</p>
        </div>
      </div>
      <div className="timeline-marker hidden md:block absolute left-1/3 ml-[-8px] mt-2">
        <div className="w-4 h-4 rounded-full bg-blue-450 dark:bg-blue-500"></div>
        {index !== resumeData.experience.length - 1 && (
          <div className="timeline-line w-[2px] h-full bg-gray-300 dark:bg-gray-700 absolute top-4 left-[7px]"></div>
        )}
      </div>
      <div className="md:w-2/3 md:pl-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-gray-900 dark:text-white">Data Engineering Experience</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-450 dark:bg-blue-500"></span>
          </motion.h2>
          <div className="timeline space-y-12">
            {experience.map((job, index) => (
              <TimelineItem key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
