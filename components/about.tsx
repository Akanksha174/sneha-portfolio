"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Mountain, Code, Database, Camera } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { name: "Java", icon: <Code className="h-6 w-6 text-purple-600" /> },
    { name: "Python", icon: <Code className="h-6 w-6 text-purple-600" /> },
    { name: "R", icon: <Code className="h-6 w-6 text-purple-600" /> },
    {
      name: "Machine Learning",
      icon: <Database className="h-6 w-6 text-purple-600" />,
    },
  ]

  return (
    <section id="about" className="py-20 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4"></h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900 shadow-lg max-w-md mx-auto">
                <img
                  src="/sneha.jpg?width=400&height=400&"
                  alt="Sneha Prasad"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg">
                <Star className="h-6 w-6" />
              </div>
              <div className="absolute -top-4 -left-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                <Mountain className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Hello, I'm Sneha!</h3>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
  I'm a final-year B.Tech CSE student specializing in data science. My interests lie in leveraging data to build impactful, tech-driven solutions.
</p>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
  Outside academics, I enjoy exploring data trends, coding projects, and enhancing my skills through hands-on experimentation.
</p>

{/* 
            <div className="pt-4">
              <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-white dark:bg-slate-800 border-none shadow-md">
                    <CardContent className="flex items-center p-3 space-x-2">
                      {skill.icon}
                      <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
