import { ToastContainer } from 'react-toastify';
import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <div>
        <h2>Question: </h2>
      </div>
    </div>
  );
}

export default App;
