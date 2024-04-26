import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  return (
    <>
    
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>

      <Route path='/' element ={<Home/>} />
      <Route path='/Jobs' element ={<Jobs/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
