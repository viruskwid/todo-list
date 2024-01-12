import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTodo, deleteTodo } from './Components/TodoSlice'

function Todo() {
    const dispatch=useDispatch()
    const {todoList,counter}=useSelector((state)=>state.todos)
    const [checkBox,setCheckBox]=useState({
        status:"",id:""
    })
    const handleCheck=(status,id)=>{
        setCheckBox({status:status,id:id})
        dispatch(checkTodo(checkBox))
    }
    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }
    useEffect(()=>{
        handleCheck()
    },[checkBox.status])
  return (
    <div className='bg-info shadow border'>
        <table style={{borderColor:'black', border:'solid 5px'}} width={'100%'} className='fs-5 mt-5 bg-dark border shadow' >
        <thead className='border shadow' >
       {todoList?.map((list)=>(
        <tr className={list.status&&'bg-success '}>
        <th className='ps-2'><input checked={list.status}  onChange={e=>handleCheck(e.target.checked,list.id)} type="checkbox" name="" id="" /></th>
        <th >{list.todo}</th>
        <th className='py-2'><button onClick={()=>handleDelete(list.id)} className='btn bg-danger rounded-3 '><i class="fa-regular fa-circle-xmark"></i></button></th>
       </tr>
       ))}
       </thead>
        </table>
        {counter!=""&&<h5 className='mt-4 bg-light'>Total Completed Items:{counter}</h5>}
    </div>
  )
}

export default Todo