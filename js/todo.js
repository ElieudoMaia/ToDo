function getTodoListElement() {
  const [list] = document.getElementsByClassName('todo-list');
  return list.children[1];
}

function getDoingListElement() {
  const [list] = document.getElementsByClassName('complete-list');
  return list.children[1];
}

function removeToDoTask(element) {
  element.remove();
}

function addDoingTask(description) {
  const ulDoing = getDoingListElement();

  const liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode(description));

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('delete');
  buttonElement.innerText = 'Apagar';

  buttonElement.addEventListener('click', (event) => {
    event.target.parentElement.remove();
  })

  liElement.appendChild(buttonElement);
  ulDoing.appendChild(liElement);
}

function listenCheckedEvent(element) {
  element.addEventListener('change', (event) => {
    addDoingTask(event.target.nextElementSibling.innerText);
    removeToDoTask(event.target.parentElement);
  });
}

function addToDotask(description = '') {
  const list = getTodoListElement();

  const liElement = document.createElement('li');

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  listenCheckedEvent(inputElement);

  const labelElement = document.createElement('label');
  labelElement.innerText = description;

  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);

  list.appendChild(liElement);
}

const inputText = document.getElementById('new-task');
const btnAddTask = document.getElementById('addTask');
btnAddTask.addEventListener('click', () => {
  addToDotask(inputText.value);
  inputText.value = '';
})
