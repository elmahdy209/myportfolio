
export default function AddTask() {
    // const addbtn = document.querySelector('.addbtn');
    function toDel(){
        new_task.remove();
        document.querySelector('hr').remove();
    }
    function toDone(){
        if (new_task.classList.contains('taskbg')){
            new_task.classList.remove('taskbg');
        }else{
            new_task.classList.add('taskbg');
        }
    }
    const input = document.querySelector('.taskinpt');
    const input_value = input.value
    const tasks = document.querySelector('.tasks');
    const new_task = document.createElement('div');
    const new_span = document.createElement('span');
    const arrow = '> ';
    new_span.textContent = arrow;
    new_span.classList.add('task-arrow');
    new_task.appendChild(new_span);
    const del = document.createElement('button');
    del.textContent = "x";
    del.classList.add('delete');
    tasks.appendChild(new_task)
    new_task.classList.add('task');
    new_task.classList.add('flex');
    new_task.appendChild(document.createTextNode(input_value));
    new_task.appendChild(del);
    new_task.insertAdjacentHTML('afterend', '<hr>');
    new_task.addEventListener('click',() => {
      toDone();
    }
    )
    
    del.addEventListener('click',() => {
      toDel()
    }
    )
}