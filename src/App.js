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
import Ref1 from './hooks/useref/Ref1';
import Objectusestate from './hooks/usestate/Objectusestate';
import Arrayusestate from './hooks/usestate/Arrayusestate';
import GrandParent from './hooks/optimization/GrandParent';

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
         {/* <ParentComponent/> */}
         <Ref1/>
        <Objectusestate/>
        <Arrayusestate/>
        <GrandParent/>
    </div>
  );
}

export default App;
