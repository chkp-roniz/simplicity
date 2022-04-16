import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from './pages/welcome/Welcome';
import SetupSelector from './pages/setup/Setup';
import OnPremis from './pages/on-prem/OnPremis';
import Cloud from './pages/cloud/Cloud';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="select-setup" element={<SetupSelector />} />
        <Route path="cloud-mgmt" element={<Cloud />} />
        <Route path="on-prem-mgmt" element={<OnPremis />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
