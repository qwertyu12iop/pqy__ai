import React from 'react';
interface Props{
    userName:string;
    //ts 除了内置的类型外 可以有自定义类型 class interface
    //React 提供的类型 事件类型 ChangeEvent
    //type="radio" type="checkbox" 
    // HTMLInputElement 事件源的类型  event.target.value
    //重要地方约束 不会出错  99.99%的错误
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const NameEditComponent:React.FC<Props>=(props)=>{

    return(
        <>
        <label >Update name:</label>
        <input value={props.userName} onChange={props.onChange} />
        </>
    )
}
export default NameEditComponent;
