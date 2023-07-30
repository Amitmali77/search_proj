import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homescreen from './screens/Homescreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Datadescpage from './screens/Datadescpage';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homescreen/>} exact/> 
            <Route path='/product/:id' element={<Datadescpage/>}/>           
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
