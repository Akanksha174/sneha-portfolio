"use client"

import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Certificates = () => {
  const certificates = [
    {
      title: "Cloud Computing ",
      issuer: "NPTEL",
      date: "June 2023",
      description:
        "Comprehensive specialization covering machine learning algorithms, neural networks, and practical applications.",
      link: "#",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM via Coursera",
      date: "March 2023",
      description:
        "Professional certificate covering data analysis, visualization, machine learning, and data science methodologies.",
      link: "#",
    },
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      date: "December 2022",
      description:
        "Course on Python libraries for data analysis including NumPy, Pandas, Matplotlib, and Scikit-Learn.",
      link: "#",
    },
    {
      title: "SQL for Data Analysis",
      issuer: "DataCamp",
      date: "October 2022",
      description:
        "Certificate in SQL fundamentals and advanced queries for data analysis and database management.",
      link: "#",
    },
  ]

  return (
    <section id="certificates" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-6">Certificates</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          A few of the certifications I've completed to build strong foundations in data and machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="p-5 bg-white dark:bg-slate-800 shadow-sm">
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {certificate.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {certificate.date}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">{certificate.issuer}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{certificate.description}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 dark:text-purple-400 underline"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
