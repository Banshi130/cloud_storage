import BaseInput from './components/BaseInput';
import './App.css';
import TemplateButton from './components/BaseButton'
import {ReactComponent as IconLogin} from './icon/button.svg';



function App() {
  return (
    <div className="App">
      <TemplateButton >
        <IconLogin className="IconLogin"/>
      </TemplateButton>
      <TemplateButton typeStyle="dark">
        Зарегистрироваться
      </TemplateButton>
      <TemplateButton typeStyle="dark">
        Сменить пароль
      </TemplateButton>
    </div>
  );
}

export default App;
