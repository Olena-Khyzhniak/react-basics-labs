import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Make it well"/>
      <Task title="Laundry" deadline="Tomorrow" description="Make it well"/>
      <Task title="Tidy" deadline="Today" description="Make it well"/>
    </div>
  );
}

export default App;
