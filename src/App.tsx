import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

const App : React.FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App