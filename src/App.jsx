import { LoginForm } from './pages/Login/index';
import { RegForm } from './pages/RegistrationForm/index'
import { ResetPass } from './pages/ResetPassword/index'
import { Route, Routes } from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<LoginForm />} />
      <Route path="/registration" element={<RegForm />} />
      <Route path="/resetpass" element={<ResetPass />} />
    </Routes>                  
    </div>
  );
}

export default App;
