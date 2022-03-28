import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { CV } from "./CV/CV";
import "./styles/main.scss";
import { useState } from "react";
import Studies from "./components/Studies";
import Experience from "./components/Experience";
import Languajes from "./components/Languajes";
import Others from "./components/Others";
import Footer from "./components/Footer/Footer";

function App() {
  const {hero, about, studies, experience, languages, others } = CV;
  const [page, setPage] = useState(null)

  return (
    <div className="App">
      <header className="header">
      <Hero  hero= {hero}/>
      <About about = {about}/>
      </header>
      <div className="icons">
      <img onClick={()=>setPage('studies')} src="./Assets/studies.png" alt="" />
      <img onClick={()=>setPage('experience')} src="./Assets/experience.png" alt="" />
      <img onClick={()=>setPage('languages')} src="./Assets/languages.jpg" alt="" />
      <img onClick={()=>setPage('others')} src="./Assets/others.png" alt="" />
      </div>
      <div className="pageContainer">
        { page === "studies" ? <Studies close = {()=> setPage(null)} studies= {studies}/>
         : page === "experience" ? <Experience close = {()=> setPage(null)} experience= {experience}/>
         : page === "languages" ? <Languajes close = {()=> setPage(null)} languages= {languages}/>
         : page === "others" ? <Others close = {()=> setPage(null)} others= {others}/>
         : null    
        } 
      </div>
      <Footer email={"mailto:" + hero.email} github={hero.gitHub} linkedin = {hero.linkedin}/>
    </div>
  );
}

export default App;
