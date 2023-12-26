var taskInput = document.getElementById('taskInput');
var addTask = document.getElementById('addTask');
var taskList = document.getElementById('taskList');

addTask.addEventListener('click', addNewTask);

function addNewTask() {
  // get user input
  var taskName = taskInput.value.trim();
  if (taskName === '') return;
  
  // create element that represents task
  var listItem = document.createElement('li');
  listItem.innerHTML = '<input type="checkbox">' +
    '<span class="task">' + taskName + '</span>' + '<button class="delete">Delete</button>';
  
  var deleteButton = listItem.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  
  // render task in list
  taskList.appendChild(listItem);
  
  // reset the value in the input
  taskInput.value = '';
}
