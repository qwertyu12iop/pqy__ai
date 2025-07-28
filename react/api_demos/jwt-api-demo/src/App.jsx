import {
  useState,
  useEffect
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api'

function App() {
  // const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos();
      // console.log(todosResult);
      // setTodos(todosResult.data.data);
      const reposResult = await getRepos();
      console.log(reposResult);
      setRepos(reposResult.data);

    }
    fetchData()
  }, [])
  return (
    <>
      {/* {
        todos.map(todo => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
          </div>
        ))} */}
        {
          repos.map(repo => (
            <div key={repo.id}>
              <h1>{repo.title}</h1>
              <p>{repo.description}</p>
            </div>
          ))
        }
    </>
  )
}

export default App
