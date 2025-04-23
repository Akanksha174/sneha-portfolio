"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const projects = [
    {
      title: "Cafe Sales Analysis & Real-Time Inventory Management",
      description:
        "Developed a system to analyze sales and manage cafe inventory using Python, MySQL, and Tableau. Implemented real-time stock alerts and used ML (Linear Regression & ARIMA) for sales forecasting.",
      image: "/InventoryManagment.jpg?height=300&width=500",
      tags: [
        "Python",
        "MySQL",
        "Tableau",
        "R",
        "Machine Learning",
        "ARIMA",
        "Data Visualization",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Data Warehouse and Real-Time ETL Pipeline",
      description:
        "Built an ETL pipeline and data warehouse to automate data flow for sales, inventory, and expenses. Generated business insights using SQL and created interactive dashboards with Power BI.",
      image: "/p2.jpg?height=300&width=500",
      tags: ["Power BI", "MySQL", "Python", "ETL", "SQL", "Business Intelligence"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "HR Data Insights using SQL",
      description:
        "Analyzed HR data using SQL to uncover insights on employee management, salaries, and job roles. Enhanced querying skills using joins, subqueries, and analytic functions.",
      image: "/p4.jpg?height=300&width=500",
      tags: ["SQL", "MySQL", "Data Analysis", "Kaggle Dataset"],
      demoLink: "#",
      githubLink: "#",
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
    <section id="projects" className="py-20 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of my data science, machine learning, and photography projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border-none">
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-950"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-slate-700 border-slate-300 hover:bg-slate-50 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
