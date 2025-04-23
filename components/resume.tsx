"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Resume</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
          Download my resume to get a detailed look at my experience, skills, and projects.
        </p>
        <Button
          asChild
          variant="outline"
          className="text-purple-600 border-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-950"
        >
          <a href="https://drive.google.com/file/d/11EwitygxrtTHlyhTZbknq69txhkKnJs6/view" download>
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  )
}

export default ResumeSection
