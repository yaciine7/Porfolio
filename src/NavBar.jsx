function NavBar(){
    return(
        <>
         <nav className="flex items-center justify-between px-10 py-6">
            <h1 className="text-white font-extrabold text-3xl">Yacine Dev</h1>
            <ul className="text-white flex space-x-4 font-extrabold">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>
        </>
    )
}

export default NavBar;