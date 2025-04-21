const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Sneha Prasad</h3>
            <p className="text-slate-400 mt-1">Data Science Enthusiast</p>
          </div>
          <div className="text-slate-400 text-sm">&copy; {currentYear} Sneha Prasad. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
