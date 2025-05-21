import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Linkedin, Github, Twitter, Dribbble 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { resumeData } from "@/data/resumeData";
import { useToast } from "@/hooks/use-toast";
import { validateEmail } from "@/lib/utils";

export default function ContactSection() {
  const { toast } = useToast();
  const { contact, social } = resumeData;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: formData.name.trim() === "",
      email: !validateEmail(formData.email),
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === ""
    };
    
    setErrors(newErrors);
    
    // If there are no errors, submit the form
    if (!Object.values(newErrors).some(error => error)) {
      // This would typically be a form submission to a backend
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-gray-900 dark:text-white">Get In Touch</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-450 dark:bg-blue-500"></span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-blue-450 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-450 dark:hover:text-blue-400"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-blue-450 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a 
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} 
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-450 dark:hover:text-blue-400"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-blue-450 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">{contact.location}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-10 mb-6">Social Profiles</h3>
              <div className="flex space-x-4">
                <a 
                  href={social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-700 dark:text-gray-300 hover:text-blue-450 dark:hover:text-blue-400" />
                </a>
                <a 
                  href={social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="text-gray-700 dark:text-gray-300 hover:text-blue-450 dark:hover:text-blue-400" />
                </a>
                <a 
                  href={social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="text-gray-700 dark:text-gray-300 hover:text-blue-450 dark:hover:text-blue-400" />
                </a>
                <a 
                  href={social.dribbble} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  aria-label="Dribbble"
                >
                  <Dribbble className="text-gray-700 dark:text-gray-300 hover:text-blue-450 dark:hover:text-blue-400" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-450 dark:focus:ring-blue-400 focus:border-blue-450 dark:focus:border-blue-400 outline-none transition-colors duration-200`} 
                    placeholder="Your name" 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-450 dark:focus:ring-blue-400 focus:border-blue-450 dark:focus:border-blue-400 outline-none transition-colors duration-200`}
                    placeholder="Your email address" 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-450 dark:focus:ring-blue-400 focus:border-blue-450 dark:focus:border-blue-400 outline-none transition-colors duration-200`}
                    placeholder="Message subject" 
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">Subject is required</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-450 dark:focus:ring-blue-400 focus:border-blue-450 dark:focus:border-blue-400 outline-none transition-colors duration-200`}
                    placeholder="Your message" 
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-blue-450 hover:bg-blue-650 text-white dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
