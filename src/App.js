import "./styles.css";
import {useSelector,useDispatch} from 'react-redux'

import {
  incCount,
  decCount,
  setCount
} from './actions/counterActions'
export default function App() {
const counter=useSelector((state)=>state.counter)
const dispatch=useDispatch()

  return (
    <div className="App">
<button onClick={()=>dispatch(incCount())}>INC</button>
<button onClick={()=>dispatch(decCount())}>DEC</button>
<button onClick={()=>dispatch(setCount(0))}>SETNC</button>

{counter.count}


         </div>
  );
}
