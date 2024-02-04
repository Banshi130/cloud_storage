import './App.css';
import TemplateButton from './components/BaseButton'
import {ReactComponent as IconLogin} from './icon/buttonLogin.svg';

function handleClick() {
      alert('You clicked me!');
      
  }


function App() {
  return (
    <div className="App">
      <TemplateButton >
        <IconLogin className="IconLogin"/>
      </TemplateButton>
      <TemplateButton typeStyle="dark">
        Зарегистрироваться
      </TemplateButton>
      <TemplateButton typeStyle="dark" onClick={handleClick}>
        Сменить пароль
      </TemplateButton>
    </div>
  );
}

export default App;
