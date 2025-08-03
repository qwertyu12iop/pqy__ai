import { useCounterStore } from "../../store/count"
//来自store
const Counter=()=>{
    const {
        count,
        increment,
        decrement,
    }=useCounterStore()
    return(
        <>
        Counter {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>  
        </>
    )
}
export default Counter