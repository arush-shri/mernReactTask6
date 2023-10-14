import './App.css';
import '../src/font.css'
import { Routes, Route } from 'react-router-dom';
import NavBar, { SideBar } from './components/navBar';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './components/pages/homeBody';
import Contact from './components/pages/contact';
import Certificate from './components/pages/certificates';
import About from './components/pages/about';
import DeadlockProject from './components/pages/deadlock';
import PassGuardProject from './components/pages/passguard';
import HisabProject from './components/pages/hisab';

function App() {
  const [mode, setMode] = useState('dark');
  const [sideBar, openSideBar] = useState(false);
  return (
    <div className={`App app_${mode}`}>
      <NavBar mode={mode} setMode={setMode} sideBar={sideBar} openSideBar={openSideBar}/>
      {sideBar? <SideBar mode={mode} setMode={setMode} />: '' }
      <Home theme={mode}/>
      <Routes>
        <Route path='/' element={<Home theme={mode}/>}/>
        <Route path='/deadlockchatbox' element={<DeadlockProject theme={mode} />}/>
        <Route path='/passguard' element={<PassGuardProject theme={mode} />}/>
        <Route path='/hisabbook' element={<HisabProject theme={mode} />}/>
        <Route path='/certificate' element={< Certificate mode={mode} />}/>
        <Route path='/about' element={<About theme={mode} />}/>
        <Route path='/contact' element={<Contact theme={mode} />}/>
      </Routes>
    </div>
  );
}

export default App;
