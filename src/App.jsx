import BaseInput from './components/BaseInput';
import ModalWindow from './components/ModalWindow'
import { ReactComponent as VisIcon } from "./icon/IconPassword.svg";
import { ReactComponent as HintIcon } from "./icon/IconHint.svg";
import LoginForm from './components/LoginForm';



function App() {
  return (
    <div className="App">
      <div className='check'>  
          <ModalWindow>
          <BaseInput onInput={(e)=>{console.log(e, "onInput")}}
          onBlur={(e)=>{console.log(e, "onBlur")}} 
          SufixIcon={VisIcon}/>
          </ModalWindow> 
          <LoginForm />            
      </div>
    </div>
  );
}

export default App;
