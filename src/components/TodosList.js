import React from 'react'

const TodosList = ({todos, setTodos}) => {

  const handleDelete=({id})=>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>

      {todos.map((todo)=>(
        <li className='list-item' key={todo.id}>
          <input
            type="text" 
            value={todo.title} 
            className="list" 
            onChange={(event)=>event.preventDefault}/>

            
              <button className='button-delete' onClick={()=>handleDelete(todo)}>
              X
              </button>
           
          </li>
  )

    )}
    
    
    </div>);
};

export default TodosList;