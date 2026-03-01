import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import JoinRoom from "./pages/JoinRoom";
import CreateRoom from "./pages/CreateRoom";

const App : React.FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/join" element={<JoinRoom/>}/>
      <Route path="/create" element={<CreateRoom/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App