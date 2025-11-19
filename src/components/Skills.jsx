import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      color: 'blue'
    },
    {
      title: 'UI Libraries',
      skills: ['Tailwind CSS', 'Chakra UI', 'Material UI', 'Styled Components', 'Bootstrap'],
      color: 'purple'
    },
    {
      title: 'State Management',
      skills: ['Redux Toolkit', 'Context API'],
      color: 'green'
    },
    {
      title: 'Testing',
      skills: ['Jest', 'React Testing Library'],
      color: 'red'
    },
    {
      title: 'Tools & APIs',
      skills: ['Git', 'GitHub', 'Bitbucket', 'REST', 'Axios', 'Postman', 'Jira'],
      color: 'yellow'
    },
    {
      title: 'Backend Exposure',
      skills: ['Node.js', 'SQL Server', 'MongoDB', '.NET MVC'],
      color: 'indigo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full bg-${category.color}-500`}></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-white mb-2">5+</h4>
              <p className="text-gray-100">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-white mb-2">30+</h4>
              <p className="text-gray-100">Technologies</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
              <p className="text-gray-100">Projects Delivered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;