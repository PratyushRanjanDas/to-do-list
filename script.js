const STORAGE_KEY = 'todo_tasks';
const form = document.querySelector('.input-area');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyImg = document.getElementById('empty-img');
const remainingCountEl = document.getElementById('remaining-count');
const totalCountEl = document.getElementById('total-count');

function getTasks() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
    const tasks = getTasks();
    taskList.innerHTML = '';
    tasks.forEach((task, idx) => {
        const li = document.createElement('li');
        li.className = task.done ? 'completed' : '';
        li.dataset.index = idx;
        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = 'task-text';
        span.addEventListener('click', () => {
            tasks[idx].done = !tasks[idx].done;
            saveTasks(tasks);
            render();
        });
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'delete-btn';
        delBtn.title = 'Delete';
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tasks.splice(idx, 1);
            saveTasks(tasks);
            render();
        });
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });

    const remaining = tasks.filter(t => !t.done).length;
    remainingCountEl.textContent = remaining;
    totalCountEl.textContent = tasks.length;
    emptyImg.style.display = tasks.length === 0 ? 'block' : 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    const tasks = getTasks();
    tasks.push({ text, done: false });
    saveTasks(tasks);
    taskInput.value = '';render();
});

render();
