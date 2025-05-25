import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CarInsurance from './components/CarIns/CarInsurance';
import HealthInsurance from './components/HealthIns/HealthInsurance';
import LifeInsurance from './components/LifeIns/LifeInsurance';
import Home from './components/Home';
import User from './components/User';
import Caruser from './components/CarIns/Caruser';

function App() {
  return (
   <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/car' element={<CarInsurance/>}/>
          <Route path='/health' element = {<HealthInsurance/>}/>
          <Route path='/life' element = {<LifeInsurance/>}/>
          <Route path='/user' element = {<User/>}/>
          <Route path='/caruser'element = {<Caruser/>}/>
         </Routes>
      </div>
   </Router>
  )
}


export default App
