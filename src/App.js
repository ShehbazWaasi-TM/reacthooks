import './App.css';
import Datafetching from './hooks/useeff/Datafetching';
import Useeff from './hooks/useeff/Useeff';
import Useeff1 from './hooks/useeff/Useeff1';
import Useeffcleanup from './hooks/useeff/Useeffcleanup';
import Fetchindividualpost from "./hooks/useeff/Fetchindividualpost"
import Simplereducer from './hooks/usereducer/Simplereducer';
import Complexreducer from './hooks/usereducer/Complexreducer';
import Reducer3 from './hooks/usereducer/Reducer3';
import UseReducerContext from './hooks/usereducer/UseReducerContext';
import FethingwithReducer from './hooks/usereducer/FethingwithReducer';
import ParentComponent from './hooks/Usecallback/ParentComponent';

function App() {
  return (
    <div className="App">
         {/* <Useeff/> */}
         {/* <Useeff1/> */}
         {/* <Useeffcleanup/>
         <Datafetching/>
         <Fetchindividualpost/>
         <div>
            <Simplereducer/>
            <Complexreducer/>
            <Reducer3/>
            <UseReducerContext/>
            <FethingwithReducer/>
         </div> */}
         <ParentComponent/>
       
    </div>
  );
}

export default App;
