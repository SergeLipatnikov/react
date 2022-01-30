import logo from './logo.svg';
import './Styles/App.css';
import './Styles/mess_style.css';
import { Message } from './Components/Message';


const myText = 'Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mes">
        <Message text={myText} />
        </p>
      </header>
    </div>
  );
}

export default App;
