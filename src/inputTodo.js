import React, { useRef, useState} from "react"
import TodoList from "./todoList"



const InputTodo = (props) => {
	// function clickHandler()  {
	// 	const title = inputRef.current.value;
	// 	// setTodos(prevTodos => {
	// 	// 	return [prevTodos, {id: 1, name: "name", completed: false}]
	// 	// })
	// 	inputRef.current.value = null
	// 	const newTasks = [...todos, {title, completed: false}]

	// 	setTodos(newTasks)
	// 	console.log("newtask added", newTasks)

	



 return ( 
 	<div className="inner-container">
 	<h1 > Add a new Todo </h1> 
 	<input ref={props.input} type="text" placeholder="new Todo" className="input-text textInput" /> 
 	<button onClick={props.ClickHandler} className="input-submit button item"> Submit </button>
 	</div>
 	)
} 


export default InputTodo