import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navbar, Footer } from '@/components/layout'
import { Hero, About, Strengths, Skills, Experience, Projects, Contact } from '@/components/sections'
import { CustomCursor } from '@/components/common'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        <div className="min-h-screen z-10 relative text-foreground bg-background">
          <Navbar />
          <main>
            <Hero />
            <About />
            <div className="dark:bg-surface/15">
              <Strengths />
            </div>
            <Experience />
            <div className="dark:bg-surface/15">
              <Skills />
            </div>
            <Projects />
            <div className="dark:bg-surface/15">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
