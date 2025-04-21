"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundSize: "cover",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sneha Prasad</h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Data Science Enthusiast
          </p>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            size="lg"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero
