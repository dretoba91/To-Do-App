'use strict';

// varaibles
const root = document.querySelector(':root');
const container = document.querySelector('.container');
const newTaskInput = document.getElementById('new_task_input');
const taskForm = document.getElementById('new_task_form');
const taskList = document.getElementById('task_list');
const taskBtn = document.querySelector('.task_check_btn');
const themeBtn = document.querySelector('.theme_toggle_btn');

// submit task form
taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTaskInputValue = taskForm.elements.new_task_input;
  console.log(newTaskInputValue);

  addTask(newTaskInput.value);
  //   console.log(newTaskInput.value);

  // Reset input value to empty
  newTaskInputValue.value = '';

  container.classList.remove('todo_list_empty');
});

// add task to List
function addTask(newTask) {
  //create list element and set its class
  const newTaskItem = document.createElement('li');
  newTaskItem.setAttribute('class', 'task_item');

  // create checkbox element and set its type and class
  const newCheckBtn = document.createElement('div');
  newCheckBtn.setAttribute('class', 'task_check_btn');

  // create span element and set its class and add new task input
  const newTaskBio = document.createElement('span');
  newTaskBio.setAttribute('class', 'task_bio');

  // add input  value to li
  newTaskBio.innerText = newTask;

  // insert li tag inside the ul tag
  taskList.appendChild(newTaskItem);

  // insert checkbox to li
  newTaskItem.appendChild(newCheckBtn);

  // insert newTask into li
  newTaskItem.appendChild(newTaskBio);

  // run Function when task is completed and checkbox is check.
  onTaskComplete(newCheckBtn);
}

// To rmove or delete checked completed task
function onTaskComplete(btns) {
  btns.addEventListener('click', function (e) {
    let parent = e.toElement.parentElement;

    // to slide out task  to the right
    parent.classList.add('task-completed');

    // delete task that has been slide out
    setTimeout(() => {
      //  removing the parent element of the checkboxin the Li in 0.5s
      parent.remove();
    }, 400);

    if (taskList.childNodes.length == 1) {
      setTimeout(() => {
        container.classList.add('todo_list_empty');
      }, 800);
    }
  });
}

// Setting Dark Mode
themeBtn.addEventListener('click', function () {
  let darkTheme = themeBtn.classList.toggle('dark');
  //   console.log(darkTheme);
  if (darkTheme) {
    root.style.setProperty('--theme-transition', '1s');
    root.style.setProperty('--primary-color', '#1E1E1E');
    root.style.setProperty('--secondary-color', '#3B3B3B');
    root.style.setProperty('--text-color', '#EAEAEA');

    root.style.setProperty('--task-color', '#3B3B3B');
    root.style.setProperty('--footer-color', '#1E1E1E');

    root.style.setProperty('--theme-btn', `url('assets/Light-theme-btn.svg`);
    root.style.setProperty('--container-bg', `url('assets/Dark-empty.svg`);

    root.style.setProperty('--fliter', 'invert()');
  } else {
    root.style.setProperty('transition', '1s');
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--secondary-color', '#1E1E1E');
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--task-color', 'white');
    root.style.setProperty('--footer-color', '#1E1E1E');
    root.style.setProperty('--theme-btn', `url('assets/Dark-theme-btn.svg')`);
    root.style.setProperty('--container-bg', `url('./assets/Light-empty.svg')`);
  }
});
