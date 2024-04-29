import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutJapan from './components/AboutJapan';
import Footer from './components/Footer';
function App() {
  return (
    <> 
    <BrowserRouter>
    <ResponsiveAppBar/>
    
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/Jobs' element ={<Jobs/>}/>
      <Route path='/contactus' element ={<Contact/>}/> 
      <Route path='/aboutjapan' element ={<AboutJapan/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
