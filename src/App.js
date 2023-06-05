import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration/registration';
import Signup from './Components/SignUp/sign';
import Profile from './Components/Profile/profile';
import EditProfile from './Components/Edit/Edit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
