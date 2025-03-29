import '../src/styles/main.sass'
import Header from './components/Header/Header'
import Agency from './components/Agency/Agency'
import Services from './components/Services/Services'
import Project from './components/Projects/Project'
import Results from './components/Results/Results'

const App = () => {
  return (
    <>

      <Header />
      <Services />
      <Project />
      <Results/>
      <Agency />

    </>
  )
}

export default App
