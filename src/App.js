
import './App.css';
import ContentPage from './pages/ContentPage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import InputPage from './pages/InputPage';
import LandingPage from './pages/LandingPage';
import SignUP from './pages/SignUP';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div id="app">
       <Routes>
      <Route exact path='/signup' element={<SignUP/>} />
      <Route exact path='/about' element={<AboutUs/>} />
      <Route exact path='/contact' element={<ContactPage/>}/>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/input' element={<InputPage/>}/>
      <Route exact path='/contents' element={<ContentPage/>}/>
      </Routes> 
    </div>
  );
}

export default App;
