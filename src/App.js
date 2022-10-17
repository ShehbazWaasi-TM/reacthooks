import './App.css';
import Useeff from './hooks/useeff/Useeff';
import Useeff1 from './hooks/useeff/Useeff1';
import Useeffcleanup from './hooks/useeff/Useeffcleanup';

function App() {
  return (
    <div className="App">
         <Useeff/>
         {/* <Useeff1/> */}
         <Useeffcleanup/>
         {/* <Useref/> */}
    </div>
  );
}

export default App;
