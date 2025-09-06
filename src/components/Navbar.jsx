import { ArrowRight, Minimize2 } from "lucide-react"
const Navbar = ({ theme, setTheme }) => {
  
  const [sideBarOpen, setSideBarOpen] = useState(false)
  
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 z-20">
          <img src={theme === 'dark' ? 'logo_dark' : 'logo'} alt="" className="w-32 sm:w-40" />

          <div className={`text-gray-700 dark:text-white sm:text &{!sideBarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 right-0 bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <Minimize2 className="w-5 absolute right-4 top-4 sm:hidden" onClick={(() => setSideBarOpen(false))}/>

            <a href='#' className="sm:hover:border-b">Home</a>
            <a href='#services' className="sm:hover:border-b">Services</a>
            <a href='#our-work' className="sm:hover:border-b">Our Work</a>
            <a href='#contact-us' className="sm:hover:border-b">Contact Us</a>
          </div>
          
          <div>
            <Minimize2 {theme === 'dark' ? }
          </div>
        
          <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 rounded-full cursor-pointer hover:scale-105 transition-all">
              Connect <ArrowRight className="w-8" />
          </a>
    </div>
  )
}

export default Navbar