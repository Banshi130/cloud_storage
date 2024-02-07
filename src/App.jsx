import { ModalWindow } from './components/ModalWindow/index';
import { LoginForm } from './pages/Login/index';
import { RegForm } from './pages/RegistrationForm/index'
import { ResetPass } from './pages/ResetPassword/index'



function App() {
  return (
    <div className="App">
      <div className='check'>  
          <ModalWindow>
          <LoginForm />
          </ModalWindow>
           
                     
      </div>
    </div>
  );
}

export default App;
