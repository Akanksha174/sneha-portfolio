// "use client"

// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowDown } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
//       {/* Subtle Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-10"
//         style={{
//           backgroundImage: "url('/images/data-pattern.png')", // Optional techy pattern
//           transform: `translateY(${scrollY * 0.3}px)`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-white mb-2"
//         >
//           Turning Data Into Stories
//         </motion.h1>
//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-xl text-slate-300 mb-6"
//         >
//           Sneha Prasad
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <Button
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//             size="lg"
//             onClick={() => {
//               document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//             }}
//           >
//             Explore My Work
//           </Button>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-300"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         <ArrowDown size={24} />
//       </motion.div>
//     </section>
//   )
// }

// export default Hero;
