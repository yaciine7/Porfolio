import Bg from "./Bg"
import NavBar from "./NavBar"
import Hero from "./Hero"
import About from './About'
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from './Footer'
import Fade from "./Fade";

function App(){
  return(<>
          <Bg/>
          <NavBar/>
          <Fade><Hero/></Fade>
          <Fade><About/></Fade>
          <Fade><Projects/></Fade>
          <Fade><Skills/></Fade>
          <Fade><Contact/></Fade>
          <Footer/>
        </>)
};

export default App;