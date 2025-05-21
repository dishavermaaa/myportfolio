import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { downloadResume } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Disha Verma
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Data Engineering & Healthcare Professional
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            10+ years of experience utilizing Python, SQL, and Big Data technologies on Azure and AWS.
            Passionate about delivering data-driven solutions that make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="w-full flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">Python</span>
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">SQL</span>
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">Azure</span>
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">AWS</span>
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">Databricks</span>
              <span className="px-3 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">Snowflake</span>
            </div>
            <Button 
              asChild 
              className="px-6 py-3 bg-blue-450 hover:bg-blue-650 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 text-blue-450 border-blue-450 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
