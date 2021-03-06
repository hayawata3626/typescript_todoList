import * as React from 'react';
import '../css/addtodo.css'


const AddTodo = ({onTodoClick}: any) => {
  let input:any
	let inputDate:any
	let result;
  return(
    <div>
    <form
      className="addtodo"
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
				}
        onTodoClick(input.value, inputDate)
        input.value = ""
      }}
    >
    <input
      type="input"
      className="taskName"
      placeholder="タスク名"
      ref={node => {
        input = node
      }}
    />
    <input
      type="date"
      onChange={(e) => {inputDate = e.target.value}}
    />
    <button type="submit" className="submitButton">Submit</button>
		{result ? <div>OK</div>: <span>タスク名を入力してください</span>}
    </form>
    </div>
	)
}

export default AddTodo