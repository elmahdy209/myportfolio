import AddTask from './TodoScript';
import './Todo.css';

export default function Todo() {

  return (
    <main className="todo ">
      <div className="text">
      <h1>To Do List</h1>
      <p>
        This Application Coded By Elmahdy Abdulla , &#169; 
        All CopyRights
        Reserved
      </p>
      </div>
      <div className="data flex">
        <input className='taskinpt' type="text" placeholder="Task to be done..." />
        <button onClick={() => {
          AddTask()
        }
         } className='.addbtn'>Add</button>
      </div>
      <div className="tasks"></div>
     
    </main>
  )
}
