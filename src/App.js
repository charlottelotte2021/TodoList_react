import logo from './logo.svg';
import './App.css';
import InputTodo from './inputTodo.js'
import TodoList from './todoList.js'
import React, { useRef, useState, useEffect} from "react"
import { v4 as uuidv4 } from "uuid"
import './App.css';
const LSKEY = "MyTodoApp"

function App() {


const initialTodos = JSON.parse(localStorage.getItem(LSKEY+ ".todos")) || []
const [todos, setTodos] = useState(initialTodos)
const [checked, setChecked] = useState([]);

const inputRef = useRef();

// function addTodo() {
// const newTodo = [...todos, {id: uuidv4(), todos, completed: false}]
//     setTodos(newTodo)
//      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos)) 
// }

function ClickHandler()  {
    
    const title = inputRef.current.value;
    // setTodos(prevTodos => {
    //  return [prevTodos, {id: 1, name: "name", completed: false}]
    // })
    inputRef.current.value = null 
   if (title) { const newTasks = [...todos, {id: uuidv4(), title, completed: false}]
    setTodos(newTasks) }
}

const handleClick = (t) => {

  let updateTodos = [...todos] 
//  console.log(newTodos)

  // newTodos.forEach((todo) => {
   let findId = updateTodos.find(todo => todo.id === t.id)
   findId.completed = !findId.completed
   updateTodos[updateTodos.indexOf(findId)] = findId
  
  setTodos(updateTodos)
}

const deleteTodo = (t) => {

let todoDelete = todos.filter((todo) => {
   return todo.id !== t.id})           
setTodos(todoDelete)
}


useEffect(() => {
  window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos))                 
}, [todos]) 

// useEffect(() => {
//   window.localStorage.getItem(LSKEY + ".todos", JSON.stringify(todos))                 
// }, [todos])

// useEffect(() => {
// const retrieveTodos = JSON.parse(localStorage.getItem(LSKEY))
// if (retrieveTodos) setTodos(retrieveTodos)
// }, [])
  
// function doneTodo(t) {
// let checkedTodos = [...todos]
// let findId = checkedTodos.find(todo => todo.id === t.id)
//  checkedTodos[checkedTodos.indexOf(findId)] = findId 
//  if (findId.completed === true) {
//     setChecked(!isChecked)}
// }


  return (
   <> 
   <InputTodo 
   input={inputRef} 
   ClickHandler={ClickHandler}/> 
    <TodoList 
    // addTodo={addTodo}
    todos={todos}
    setTodos={setTodos}
    handleClick={handleClick}
    deleteTodo={deleteTodo}
    // doneTodo={isChecked}
    />

    </>
  );
}

export default App;
