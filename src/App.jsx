import { useReducer, useState } from 'react'
import './App.css'
import Input from './components/Input';
import Button from './components/Button';
import Taskitem from './components/Taskitem';
const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
        console.log(action.payload.task)
        console.log(state)
        if(action.payload.task === '')
          {
            console.log('empty')
            return state
          }
          return [{task: action.payload.task, complete: false}, ...state];
    case 'Edit':
      for(let i =0; i < state.length; i++)
        {
          if(state[i].task === action.payload.task)
            {
              let edit = document.querySelectorAll('.edit')[i]
              edit.setAttribute('style', 'display: block')
            }
        }
          return [...state]
    case 'Delete':
        for(let i =0; i < state.length; i++)
          {
            if(state[i].task === action.payload.task)
              {
                state.splice(i,1)
              }
          }
          return [...state]

    case 'Update':
      console.log(action.payload.edit)
      if(action.payload.task === '')
        {
          console.log('empty')
          return state
        }
        for(let i =0; i < state.length; i++)
          {
            if(state[i].task === action.payload.task)
              {
                let edit = document.querySelectorAll('.edit')[i]
                edit.setAttribute('style', 'display: none')
                state[i].task = action.payload.edit
                
              }
          }
      
        return [...state]
    default:
      break;
  }
}
function App() {
  const [task, setTask] = useState("");
  const [list, dispatch] = useReducer(reducer, initialState)
  const taskList = list.map((task) => {
    return(
      <>
        <Taskitem task = {task} key = {task.task} dispatch = {dispatch} />
      </>
    )
  })
  return (

    <>
      <h1>Create Todo List</h1>
      <div className="inputContainer">
        <Input state = {task} setState={setTask}/>
        <Button type={"Add"} payload={{task}} dispatch={dispatch} text={"Add"} cName = {'btn'}/> 
      </div>
      <div className="taskContainer" >
          {taskList}
      </div>
    </>
  )



}

const initialState = [
  {task: 'Wash dishes', complete: false, edit: ''},
  {task: 'Fold Laundry', completed: false, edit: ''},
  {task: 'Feed dog', completed: false, edit: ''}
]
export default App
