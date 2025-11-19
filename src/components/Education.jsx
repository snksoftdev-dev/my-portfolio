import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'MCA - Master of Computer Applications',
      institution: 'Mother Teresa PG College, Hyderabad',
      year: '2009 – 2012',
      percentage: '69.9%'
    },
    {
      degree: 'B.Sc (M.P.C)',
      institution: 'Shalivahana Degree College',
      year: '2005 – 2008',
      percentage: '60%'
    },
    {
      degree: 'Intermediate (M.P.C)',
      institution: 'Sai Goutami Junior College',
      year: '2002 – 2004',
      percentage: '62.3%'
    },
    {
      degree: 'SSC',
      institution: 'Siddartha High School',
      year: '2002',
      percentage: '81.3%'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Educational <span className="text-blue-500">Background</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1"></div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block relative">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-800 z-10"></div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium ml-2">
                        {edu.percentage}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
