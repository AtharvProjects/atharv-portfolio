import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectsCarousel } from './components/ProjectsCarousel'
import { Capabilities } from './components/Capabilities'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Labs } from './components/Labs'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <ProjectsCarousel />
      <Capabilities />
      <Skills />
      <Experience />
      <Labs />
      <Contact />
    </div>
  )
}

export default App
