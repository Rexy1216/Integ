import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration/registration';
import Signup from './Components/SignUp/sign';
import Profile from './Components/Profile/profile';
import EditProfile from './Components/Edit/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const NotPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: -58 }}>
        <p style={{ color: '#B85151', fontSize: 30, fontWeight: 700 }}>PAGE NOT FOUND</p>
      </div>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<NotPage />} />
        <Route path="/" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
