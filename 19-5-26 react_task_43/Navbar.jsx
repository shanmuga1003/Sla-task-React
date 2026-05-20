function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          MyApp
        </h1>

        <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>

      </div>

    </nav>
  )
}

export default Navbar