const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
};

const tasks = [];

// Отслеживаем клие по кнопке
dom.add.onclick = () => {
    const task = dom.new.value;
    if (task) {
        addTask(task);
    }
};

// функция добавления задач

function addTask(text) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text,
        isComplete: false
    };
    tasks.push(task);
    console.log(tasks);
}