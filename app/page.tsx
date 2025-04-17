import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Blog from "@/components/blog"
import Photography from "@/components/photography"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Resume />
        <Blog />
        <Photography />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
