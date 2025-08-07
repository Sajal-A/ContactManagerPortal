import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from './Component/Footer';
import ListContact from './Component/ListContact';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AddContact from './Component/AddContact';
import UpdateContact from './Component/UpdateContact';

function App() {
  return (
    <div className='custome-container container-lg'>
      <Router>
        <Navbar data-testid="navbar" />
        <div className='con'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addcontact' element={<AddContact/>}/>
          <Route path='/contactlist' element={<ListContact/>} />
          <Route path='/editcontact/:id' element={<UpdateContact/>}></Route>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
