import { useState } from 'react'
function TodoForm(props) {
    const onAdd=props.onAdd
    const [text,setText]=useState('打豆豆')

    const handleSubmit = (e) => {
        //阻止表单的默认提交行为
        //由js来控制
        e.preventDefault();//event api
        onAdd(text)
        console.log(e.target.value);
        //todos? 打报告
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form action="http://www.baidu.com" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="请输入待办事项"
                value={text}//双向绑定
                onChange={handleChange}
            />
            <button type="submit">添加</button>
        </form>
    )
}
export default TodoForm;