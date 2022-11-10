import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Users from './Pages/Users';
import Usage from './Pages/Usage';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';
import Header from './Header';
import Details from './Pages/Details';
import Marks from './Pages/Marks';
//import Sports from './Pages/Sports';
import Remarks from './Pages/Remarks';
import Login from './Pages/Login';
import Sports from './Pages/Sports';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='login' element = {<Login/>}/>
      <Route path='/' element = {<Home/>}/>
        <Route path='settings' element = {<Settings/>}/>
        <Route path='usage' element = {<Usage/>}/>
        <Route path='users' element = {<Users/>}/>
        <Route path='/details/:id' element = {<Details/>}>
            <Route path='marks' element = {<Marks/>}/>
            <Route path="remarks" element = {<Remarks/>}/>
            <Route path='sports' element = {<Sports/>}/>
            
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
