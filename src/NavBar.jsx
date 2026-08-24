function NavBar(){
    return(
        <>
         <nav className="flex items-center justify-between px-10 py-6">
            <h1 id="home" className="cursor-default text-white font-extrabold text-3xl"><span className="hover:text-blue-500 transition-colors duration-200">Yacine</span> Dev</h1>
            <ul className="text-white flex space-x-4 text-[1.2rem] font-extrabold">
                <li><a href="#home" className="hover:text-blue-500 transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition-colors duration-200">About</a></li>
                <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a></li>
            </ul>
         </nav>
        </>
    )
}

export default NavBar;