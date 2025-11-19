import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Enspirit Technology Services Pvt Ltd',
      period: 'Jul 2023 – Present',
      location: 'Formerly EnterPi',
      responsibilities: [
        'Developed responsive UI components using Next.js and Chakra UI for Gear Launch (POD eCommerce)',
        'Built health monitoring features for GritWell using Styled Components, React, Redux Toolkit',
        'Integrated REST APIs, handled state management and wrote unit tests using Jest & RTL'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Bees Software Solutions Pvt. Ltd',
      period: 'Mar 2020 – Jun 2023',
      location: '',
      responsibilities: [
        'Developed and maintained front-end features for Digital Valuation System using React.js and SQL Server',
        'Built education domain solutions (Cloudilya, BeeSERP) using .NET MVC, Bootstrap, and integrated Paytm payment gateway',
        'Handled UI development, API integration, and deployment in IIS web server'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
