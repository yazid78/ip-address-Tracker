import '../css/App.css'
import DisplayComponent from './DisplayComponent.tsx'
import Header from './HeaderComponent.tsx'
import LeafletComponent from './LeafletComponent.js'

function App() {


  return (
    <>
      <Header />
      <DisplayComponent />
      <LeafletComponent />
    </>
  )
}

export default App
