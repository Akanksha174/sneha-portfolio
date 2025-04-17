"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const blogPosts = [
    {
      title: "The Beauty of Mountain Stargazing",
      excerpt:
        "Exploring the connection between mountains and stars, and why it's my favorite way to disconnect from the digital world.",
      date: "April 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Getting Started with Data Visualization in Python",
      excerpt:
        "A beginner's guide to creating meaningful visualizations using Python libraries like Matplotlib and Seaborn.",
      date: "March 22, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Finding Balance: Tech and Nature",
      excerpt: "How I balance my passion for technology with my love for nature and outdoor photography.",
      date: "February 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
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
    <section id="blog" className="py-20 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Blog & Thoughts</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My perspectives on technology, personal growth, and the beauty of the natural world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border-none">
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{post.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 p-0 hover:bg-transparent"
                    asChild
                  >
                    <a href={post.link} className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog
