"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, GraduationCap } from "lucide-react"
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

  // Remove the experience array and related code

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

  // Update the return statement to only show education
  return (
    <section id="resume" className="py-16 scroll-mt-16" ref={ref}>
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

        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  )
}

export default Resume
