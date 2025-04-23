"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "June 2023",
      description:
        "Comprehensive specialization covering machine learning algorithms, neural networks, and practical applications.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM via Coursera",
      date: "March 2023",
      description:
        "Professional certificate covering data analysis, visualization, machine learning, and data science methodologies.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      date: "December 2022",
      description:
        "Comprehensive course on Python libraries for data analysis including NumPy, Pandas, Matplotlib, and Scikit-Learn.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      title: "SQL for Data Analysis",
      issuer: "DataCamp",
      date: "October 2022",
      description: "Certificate in SQL fundamentals and advanced queries for data analysis and database management.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="certificates" className="py-16 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((certificate, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-white dark:bg-slate-800 border-none shadow-md overflow-hidden">
                <div className="flex items-center p-4 bg-gradient-to-r from-purple-600 to-teal-600">
                  <Award className="h-6 w-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{certificate.date}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">{certificate.issuer}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{certificate.description}</p>
                </CardContent>
                <CardFooter className="border-t border-slate-200 dark:border-slate-700 p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-950"
                    asChild
                  >
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
