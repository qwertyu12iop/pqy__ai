import {
    useEffect,
    memo
} from 'react'
const Button = ({num,onClick}) => {
    useEffect(() => {
        console.log('Button useEffect');
    },[])
    console.log('Button render');
    return <button onClick={onClick}>{num}Click me</button>
}
//高阶组件
export default memo(Button)