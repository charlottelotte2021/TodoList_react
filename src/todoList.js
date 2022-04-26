import React, {useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import InputTodo from "./inputTodo"


const TodoList = (props) => {
// const initialTodos = [{
// 	title: title,
// 	completed: false, 
// }]




// const handleClick = (t) => {
// 	let updateTodos = [...todos] 
// // 	console.log(newTodos)

//   // newTodos.forEach((todo) => {
// 	 let findId = updateTodos.find(todo => todo.title === t.title)
// 	 findId.completed = !findId.completed
// 	 updateTodos[updateTodos.indexOf(findId)] = findId
	

// 	setTodos(updateTodos)
// }
 	

//  export const addTask = title => {
// 	const newTasks = [...todos, {title, completed: false}]
// 	setTodos(newTasks)
// 	console.log("newtask added")
// }

 // })
 

	// console.log(findId)
// if (findId === t.id) {
	// setTodos((prevState) => {prevState, completed : true})
// }


// newTodos.forEach((todo) => {
// 
// console.log(newId)
// return newId


	return (

		<div> 
		<h2> Your Todos </h2> 
		<ul> {props.todos.map((todo) => (
			<li className="Li" key={todo.id}> 
			<input 
			type="checkbox" checked={todo.completed}
			onClick={() => {props.handleClick(todo)}} 
			// checked={!isChecked}
			/> {todo.title} <button className="item" onClick={() => {props.deleteTodo(todo)}} >delete</button>
			</li>
		
		))
		}	

		</ul> 
	
		</div>

		)
} 


export default TodoList;
