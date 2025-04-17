"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Example University",
      period: "2020 - 2024",
      description: "Specializing in Data Science and Machine Learning. Maintained a CGPA of 8.5/10.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Example High School",
      period: "2018 - 2020",
      description: "Completed with 95% in Science stream with Computer Science.",
    },
  ]

  const experience = [
    {
      position: "Data Science Intern",
      company: "Tech Solutions Inc.",
      period: "May 2023 - July 2023",
      description:
        "Worked on customer segmentation using clustering algorithms. Developed dashboards for data visualization using Python and Tableau.",
    },
    {
      position: "Research Assistant",
      company: "University Research Lab",
      period: "Jan 2023 - April 2023",
      description:
        "Assisted in research on predictive modeling for healthcare outcomes. Implemented machine learning models using Python and scikit-learn.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="resume" className="py-20 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <div className="flex justify-center mb-8">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center"
            >
              <GraduationCap className="mr-2 h-6 w-6 text-purple-600" />
              Education
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {education.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md overflow-hidden">
                    <div className="h-2 bg-purple-600"></div>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-medium text-slate-800 dark:text-white">{item.degree}</h4>
                        <span className="text-sm text-purple-600 dark:text-purple-400 font-medium px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">{item.institution}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center"
            >
              <Briefcase className="mr-2 h-6 w-6 text-teal-600" />
              Experience
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {experience.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md overflow-hidden">
                    <div className="h-2 bg-teal-600"></div>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-medium text-slate-800 dark:text-white">{item.position}</h4>
                        <span className="text-sm text-teal-600 dark:text-teal-400 font-medium px-2 py-1 bg-teal-100 dark:bg-teal-900 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">{item.company}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
