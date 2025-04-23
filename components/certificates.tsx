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
      title: "Cloud Computing",
      issuer: "Swayam NPTEL",
      date: "Oct 2024",
      link: "https://drive.google.com/drive/folders/1Pr9mbD-tFKBjPfhgdXUVBw1-nBsFlLCs",
    },
    {
      title: "Mastering dsa using c and c++",
      issuer: "Coursera",
      date: "Nov 2024",
      link: "https://drive.google.com/drive/folders/1Pr9mbD-tFKBjPfhgdXUVBw1-nBsFlLCs",
    },
    {
      title: "Excel skills for business",
      issuer: "Coursera",
      date: "December 2023",
      link: "https://drive.google.com/drive/folders/1Pr9mbD-tFKBjPfhgdXUVBw1-nBsFlLCs",
    },
    {
      title: "Supervised machine learning",
      issuer: "DataCamp",
      date: "October 2022",
      link: "https://drive.google.com/drive/folders/1Pr9mbD-tFKBjPfhgdXUVBw1-nBsFlLCs",
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
    <section id="certificates" className="py-20 scroll-mt-20 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Certificates</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto my-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Recognitions and certifications I've earned from various platforms.
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
              <Card className="relative h-full border-l-4 border-purple-600 dark:border-purple-500 rounded-xl shadow-lg bg-white dark:bg-slate-800 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute right-4 top-4 text-purple-200 dark:text-purple-800 opacity-10 text-6xl">
                  <Award />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">{certificate.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{certificate.issuer}</p>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{certificate.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-600 border-purple-600 hover:bg-purple-100 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900"
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
