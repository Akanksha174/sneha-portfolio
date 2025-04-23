import Navbar from "@/components/navbar"
//  import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import Certificates from "@/components/certificates"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <Navbar />
      {/* <Hero /> */}
      <div className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      
      </div>
      <Footer />
    </main>
  )
}
