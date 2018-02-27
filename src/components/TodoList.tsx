import * as React from 'react';
import { Todo } from '../model/todo'
import '../css/todo.css'
import TodoItem from './TodoItem';
// import { AddTodoAction } from '../containers/VisibleTodo';

export interface StateFromProps {
	todos: Todo[];
}

export interface DispatchFromProps  {
	onDeleteTodo: (id:number) => void;
  onToggleTodoEditable: (id:number) => void;
  onEditTodo: (id:number, description:string) => void;
}

const TodoList = ({todos, onDeleteTodo, onEditTodo, onToggleTodoEditable}:StateFromProps & DispatchFromProps) => {
	return(
		<ul className="todos">
			{todos.map((todo:Todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onToggleTodoEditable={onToggleTodoEditable}
					/>
				)
			}
			)}
		</ul>
	)
}

export default TodoList