import React from "react"
import handleClick from "./todoList"

const Todo = ({todo}) => {
 return (
 	<div> 
 	<li key={todo} > 
	 <input type="checkbox" onClick={() => {handleClick(todo)}} 
	/> {todo} </li>
 	{todo}
 	</div>)
}

export default Todo

