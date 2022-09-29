import { ToastContainer } from 'react-toastify';
import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <div className='question-answer'>
        <div className='qa-common'>
          <h2>Question: How does react work??</h2>
          <p>Answer: React uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </div>
        <div className='qa-common'>
          <h2>Question: What is the difference between props and state??</h2>

          <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
        </div>
        <div className='qa-common'>
          <h2>Question: How many ways to use useeffect in react??</h2>
          <p>Answer: Firstly it preparing UI with the current state. Then, it goes to render the results. After that, it committing results to the DOM. And finally, browser shows the results to users interface.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
