import React, { useEffect } from 'react'
import Button from './Button'
import Input from './Input'
import { useState} from 'react'
function Taskitem({task, dispatch}) {
const [text, setText] = useState('')
const [complete, setComplete] = useState(false)

return (
      <div className= {task.task}>
        <div className= 'taskItemContainer'>
            <input type='checkBox' value={0} onClick={() => { setComplete(complete)}}/>
            <div className="edit">
            <Input state = {text} setState={setText}/>
              <Button type={"Update"} payload={{task: task.task, completed: task.completed, edit: text}} dispatch={dispatch} text={"Update"} cName = {'btn'}/>
            </div>
            <p className='taskItem'>{task.task}</p>
            <Button type={"Edit"} payload={{task: task.task, completed: task.completed}} dispatch={dispatch} text={"Edit"} cName = {'btn'}/> 
            <Button type={"Delete"} payload={{task: task.task, completed: task.completed}} dispatch={dispatch} text={"Delete"} cName = {'btn'}/>
        </div>
      </div>
  )


}
 

export default Taskitem