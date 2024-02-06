import BaseInput from './components/BaseInput/index';
import { ModalWindow } from './components/ModalWindow/index';
import { ReactComponent as VisIcon } from "./icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "./icon/IconHint.svg";
import { LoginForm } from './pages/Login/index.js';



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
