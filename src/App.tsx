import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import {Routes, Route} from 'react-router-dom';

const App : React.FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App