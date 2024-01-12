import {  useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  useState } from 'react'
import { addTodo } from './Components/TodoSlice'
import Table from './Todo'

function App() {
  const [todos,setTodos]=useState({
    id:JSON.stringify(Date.now()),todo:"",status:""
  })
  const dispatch=useDispatch()
  const handleAddTodo=()=>{
    if(todos.todo==""){
      alert("Please Enter a Todo!!")
    }
    else{
      dispatch(addTodo(todos))
     setTodos({
      id:JSON.stringify(Date.now()),todo:"",status:""
    })
    }
    
  }
  return (
    <div style={{height:'100vh'}} className='container bg-info'>
      <h1 className='text-center mt-5'>TODO</h1>
      <div className='d-flex justify-content-end mb-5 '>
      <input value={todos.todo} onChange={e=>setTodos({...todos,todo:e.target.value})} className='pb-1 w-25 rounded mt-2 shadow'  type="text" placeholder='Add your Todo' />&nbsp;&nbsp;
      <button onClick={handleAddTodo} className='btn btn-warning rounded shadow mt-2'>Add</button>
      </div>
        <Table/>
    </div>
  )
}
export default App