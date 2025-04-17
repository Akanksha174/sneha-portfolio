"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const Photography = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mountain landscape at sunset",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Night sky with stars",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Forest path in autumn",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Misty mountain valley",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Lake reflection with mountains",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Macro shot of dewdrops",
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="photography" className="py-20 scroll-mt-16" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Photography</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Capturing moments of tranquility and beauty in nature. Follow me on Instagram
            <a
              href="https://instagram.com/halcyonic.lens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline ml-1"
            >
              @halcyonic.lens
            </a>
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-12"
            asChild
          >
            <a
              href="https://instagram.com/halcyonic.lens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Photography
