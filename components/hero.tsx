// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Star, Mountain } from "lucide-react"

// const Hero = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   return (
//     <section id="about" className="py-16 scroll-mt-16" ref={ref}>
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="aspect-square rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900 shadow-lg max-w-md mx-auto">
//                 <img
//                   src="/placeholder.svg?height=400&width=400"
//                   alt="Sneha Prasad"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg">
//                 <Star className="h-6 w-6" />
//               </div>
//               <div className="absolute -top-4 -left-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
//                 <Mountain className="h-6 w-6" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Sneha Prasad</h1>
//             <h2 className="text-2xl text-purple-600 dark:text-purple-400 font-medium">
//               Data Science Enthusiast • B.Tech CSE Student
//             </h2>
//             <div className="w-20 h-1 bg-purple-600"></div>
//             <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
//               I'm a final-year B.Tech CSE student with a passion for data science, photography, and storytelling. My
//               journey in tech is driven by curiosity and a desire to create meaningful solutions through data.
//             </p>
//             <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
//               When I'm not coding or analyzing data, you'll find me stargazing or capturing moments through my camera
//               lens. I dream of someday living in the mountains, where the night sky is clearest and nature's beauty is
//               at its most serene.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
