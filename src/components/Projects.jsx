import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Gear Launch',
      subtitle: 'POD eCommerce Platform',
      company: 'Enspirit Technology Services Pvt Ltd',
      description: 'Developed responsive web UI using Chakra UI and Next.js. Integrated Redux for state management and REST APIs for backend communication.',
      tech: ['Next.js', 'Chakra UI', 'Redux', 'REST API'],
      color: 'blue'
    },
    {
      title: 'GritWell Client App',
      subtitle: 'Health Monitoring Platform',
      company: 'Enspirit Technology Services Pvt Ltd',
      description: 'Designed responsive UI using Styled Components. Implemented Redux Toolkit for state management and real-time API data integration.',
      tech: ['React.js', 'Styled Components', 'Redux Toolkit', 'Jest'],
      color: 'green'
    },
    {
      title: 'DVS - Digital Valuation System',
      subtitle: 'Answer Sheet Evaluation',
      company: 'Bees Software Solutions Pvt. Ltd',
      description: 'Developed UI using React.js, Material UI, Bootstrap. Handled RESTful API calls using Axios and deployed to IIS web server.',
      tech: ['React.js', 'Material UI', 'Bootstrap', 'Axios', 'SQL Server'],
      color: 'purple'
    },
    {
      title: 'Cloudilya',
      subtitle: 'College Management System',
      company: 'Bees Software Solutions Pvt. Ltd',
      description: 'Developed responsive UI with HTML, CSS, Bootstrap and .NET MVC. Integrated Paytm Payment Gateway, handled API calls with AJAX & jQuery.',
      tech: ['.NET MVC', 'Bootstrap', 'jQuery', 'Paytm Gateway'],
      color: 'orange'
    },
    {
      title: 'BeeSERP',
      subtitle: 'Educational ERP',
      company: 'Bees Software Solutions Pvt. Ltd',
      description: 'Developed user-friendly UI with HTML, CSS, Bootstrap and VB.NET. Managed SQL Server DB, system testing, and documentation.',
      tech: ['VB.NET', 'Bootstrap', 'SQL Server', 'IIS'],
      color: 'pink'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Showcasing professional projects across eCommerce, EdTech, and Healthcare domains
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r from-${project.color}-400 to-${project.color}-600`}></div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 font-medium">{project.subtitle}</p>
                    <p className="text-gray-500 text-sm mt-1">{project.company}</p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;