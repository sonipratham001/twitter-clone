import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage"
import SignupPage from "./pages/auth/signup/SignupPage"
import NotificationPage from "./pages/notification/NotificationPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";

import Sidebar from "./components/common/sidebar.jsx"
import RightPanel from "./components/common/RightPanel.jsx"

function App() {

  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* Common component, because it's not wrapped with Routes */}
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />



      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
