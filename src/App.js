import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './pages/welcome/Welcome';
import SetupSelector from './pages/setup/Setup';
import OnPremis from './pages/on-prem/OnPremis';
import Cloud from './pages/cloud/Cloud';
import Wizard from './pages/ftw/Wizard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/select-setup" element={<SetupSelector />} />
        <Route path="/cloud-mgmt" element={<Cloud />} />
        <Route path="/on-prem-mgmt" element={<OnPremis />} />
        <Route path="/first-time-wizard" element={<Wizard />} />
      </Routes>
    </Router>
  );
}

export default App;
